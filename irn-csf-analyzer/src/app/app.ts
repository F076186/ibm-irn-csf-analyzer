import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IbmProduct, getAllCategories, IbmCategory } from './data/ibm-products.data';
import {
  ProductAssessment,
  IRN_DIMENSIONS,
  IrnDimension,
  LandingZone,
  LANDING_ZONES,
  DocumentRagAnalysis
} from './models/irn-csf.model';
import { AssessmentService } from './services/assessment.service';
import { DocumentRagService } from './services/document-rag.service';
import { SpiderChartComponent } from './components/spider-chart/spider-chart.component';
import { SealLegendComponent } from './components/seal-legend/seal-legend.component';
import { DimensionTableComponent } from './components/dimension-table/dimension-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, SpiderChartComponent, SealLegendComponent, DimensionTableComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  title = 'IRN / CSF Analyzer';

  // Mode: 'catalogue' (IBM Technology 2026 catalogue) or 'rag' (Document Upload RAG)
  assessmentMode: 'catalogue' | 'rag' = 'catalogue';

  categories: IbmCategory[] = [];
  selectedCategoryName: string = '';
  selectedProduct: IbmProduct | null = null;
  
  landingZones: LandingZone[] = [];
  selectedLandingZone: LandingZone | null = null;

  // RAG Mode State
  isDragging = false;
  isAnalyzing = false;
  uploadedFile: File | null = null;
  ragAnalysis: DocumentRagAnalysis | null = null;
  ragTextContent: string = '';

  dimensions: IrnDimension[] = IRN_DIMENSIONS;
  assessment: ProductAssessment | null = null;
  activeTab: 'chart' | 'table' | 'rag-evidence' = 'chart';

  get productsInCategory(): IbmProduct[] {
    const cat = this.categories.find(c => c.name === this.selectedCategoryName);
    return cat ? cat.products : [];
  }

  constructor(
    private svc: AssessmentService,
    private ragSvc: DocumentRagService
  ) {}

  ngOnInit(): void {
    this.categories = getAllCategories();
    this.landingZones = this.svc.getLandingZones();
    this.selectedLandingZone = this.svc.getDefaultLandingZone();
  }

  setAssessmentMode(mode: 'catalogue' | 'rag'): void {
    this.assessmentMode = mode;
    this.recalculateAssessment();
  }

  onCategoryChange(): void {
    this.selectedProduct = null;
    this.assessment = null;
  }

  onProductChange(): void {
    this.recalculateAssessment();
  }

  onLandingZoneChange(): void {
    this.recalculateAssessment();
  }

  // ── Drag and Drop & File Upload handlers ───────────────────────────
  onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = true;
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = false;
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = false;
    if (event.dataTransfer && event.dataTransfer.files.length > 0) {
      this.handleSelectedFile(event.dataTransfer.files[0]);
    }
  }

  onFileInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.handleSelectedFile(input.files[0]);
    }
  }

  async handleSelectedFile(file: File): Promise<void> {
    this.uploadedFile = file;
    this.isAnalyzing = true;

    try {
      this.ragTextContent = await this.ragSvc.extractTextFromFile(file);
      this.ragAnalysis = this.ragSvc.analyzeDocument(file.name, file.size, this.ragTextContent);
      this.recalculateAssessment();
    } catch (err) {
      console.error('Error analyzing document:', err);
    } finally {
      this.isAnalyzing = false;
    }
  }

  loadSampleDocument(sampleType: 'watsonx' | 'ovh' | 'us-cloud'): void {
    let sampleText = '';
    let fileName = '';

    if (sampleType === 'watsonx') {
      fileName = 'IBM_watsonx_Sovereign_Architecture_Whitepaper.md';
      sampleText = `# IBM watsonx.ai & OpenShift on Cloud Temple SecNumCloud
## Architecture & Gouvernance
Déploiement de la plateforme IBM watsonx.ai sur infrastructure OpenShift hébergée en France chez Cloud Temple (qualifié ANSSI SecNumCloud).
L'ensemble de l'actionnariat et de la gouvernance opérationnelle est assuré par du personnel français habilité.
L'accès aux données et l'administration sont strictement immunisés contre le CLOUD Act américain grâce à l'isolation physique et logique.

## Chiffrement & Clés Cryptographiques
Le chiffrement des données au repos et en transit est opéré avec Keep Your Own Key (KYOK) via IBM Hyper Protect Crypto Services certifié FIPS 140-2 Level 4.
Les clés de chiffrement sont sous le contrôle exclusif du client final, sans possibilité de lecture ou d'override par IBM.

## Modèles IA et Entraînement
Les modèles de fondation Granite sont open source (Apache 2.0) avec une traçabilité SBOM complète et jeu de données audité.
Les données d'entraînement et les inférences restent confinées dans la région Paris sans aucune réplication hors UE.

## Sécurité & Conformité
Conforme RGPD, DORA et NIS2. Centre des opérations de sécurité (SOC) 100% situé en Union Européenne.
Audits réguliers par des tiers indépendants et support technique 24/7 assuré par des ingénieurs basés en France.`;
    } else if (sampleType === 'ovh') {
      fileName = 'OVHcloud_SecNumCloud_Datasheet_2026.txt';
      sampleText = `OVHcloud - Offre Hosted Private Cloud SecNumCloud 3.2
Siège social : Roubaix, France. Capital 100% européen sous droit français exclusif.
Immunité totale contre les lois extraterritoriales (CLOUD Act, FISA 702).
Fabrication des serveurs et composants dans les usines européennes d'OVHcloud avec traçabilité complète de la supply chain.
Chiffrement KMS client-side, isolation réseau et data centers refroidis par watercooling (PUE < 1.15).
Centre de supervision de sécurité (SOC) localisé en France avec supervision continue certifiée ISO 27001 et SecNumCloud.`;
    } else {
      fileName = 'Global_Public_Cloud_SaaS_Terms_Of_Service.txt';
      sampleText = `Global Public Cloud - Standard Multi-Tenant SaaS Offering
Headquarters: Seattle, Washington, United States of America.
Governed by the laws of the State of Washington and applicable US federal law.
Service is subject to US Cloud Act and lawful intercept warrants.
Data is stored primarily in US and European regions with automated global replication for disaster recovery.
Encryption keys are provider-managed by default.
Support is provided by a global 24/7 team located in North America, Asia-Pacific, and Europe.
Core software is closed-source proprietary technology.`;
    }

    this.uploadedFile = new File([sampleText], fileName, { type: 'text/plain' });
    this.ragTextContent = sampleText;
    this.ragAnalysis = this.ragSvc.analyzeDocument(fileName, sampleText.length, sampleText);
    this.recalculateAssessment();
  }

  clearUploadedDocument(): void {
    this.uploadedFile = null;
    this.ragAnalysis = null;
    this.ragTextContent = '';
    this.recalculateAssessment();
  }

  private recalculateAssessment(): void {
    if (!this.selectedLandingZone) return;

    if (this.assessmentMode === 'catalogue') {
      if (this.selectedProduct) {
        this.assessment = this.svc.assess(this.selectedProduct, this.selectedLandingZone);
      } else {
        this.assessment = null;
      }
    } else if (this.assessmentMode === 'rag') {
      if (this.ragAnalysis) {
        this.assessment = this.ragSvc.createAssessmentFromRag(this.ragAnalysis, this.selectedLandingZone);
      } else {
        this.assessment = null;
      }
    }
  }

  get globalScorePercent(): number {
    if (!this.assessment) return 0;
    return Math.round((this.assessment.globalScore / 4) * 100);
  }

  getDimLabel(index: number): string {
    return IRN_DIMENSIONS[index]?.labelFr ?? '';
  }

  getDimensions(): IrnDimension[] {
    return IRN_DIMENSIONS;
  }

  compareById(a: IbmProduct | null, b: IbmProduct | null): boolean {
    return a?.id === b?.id;
  }

  compareLzById(a: LandingZone | null, b: LandingZone | null): boolean {
    return a?.id === b?.id;
  }
}
