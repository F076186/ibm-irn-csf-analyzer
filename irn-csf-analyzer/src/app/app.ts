import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IbmProduct, getAllCategories, IbmCategory } from './data/ibm-products.data';
import {
  ProductAssessment,
  IRN_DIMENSIONS,
  IrnDimension,
  LandingZone,
  LANDING_ZONES
} from './models/irn-csf.model';
import { AssessmentService } from './services/assessment.service';
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

  categories: IbmCategory[] = [];
  selectedCategoryName: string = '';
  selectedProduct: IbmProduct | null = null;
  
  landingZones: LandingZone[] = [];
  selectedLandingZone: LandingZone | null = null;

  assessment: ProductAssessment | null = null;
  activeTab: 'chart' | 'table' = 'chart';

  get productsInCategory(): IbmProduct[] {
    const cat = this.categories.find(c => c.name === this.selectedCategoryName);
    return cat ? cat.products : [];
  }

  constructor(private svc: AssessmentService) {}

  ngOnInit(): void {
    this.categories = getAllCategories();
    this.landingZones = this.svc.getLandingZones();
    this.selectedLandingZone = this.svc.getDefaultLandingZone();
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

  private recalculateAssessment(): void {
    if (this.selectedProduct && this.selectedLandingZone) {
      this.assessment = this.svc.assess(this.selectedProduct, this.selectedLandingZone);
    } else {
      this.assessment = null;
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
