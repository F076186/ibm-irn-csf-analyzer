import { Injectable } from '@angular/core';
import { 
  IRN_DIMENSIONS, 
  DocumentRagAnalysis, 
  RagEvidence, 
  ProductAssessment, 
  LandingZone,
  SEAL_LEVELS,
  IrnScore 
} from '../models/irn-csf.model';

interface DimensionRule {
  dimensionCode: string;
  keywords: string[];
  highSovereigntyKeywords: string[];
  mediumSovereigntyKeywords: string[];
  lowSovereigntyKeywords: string[];
}

const DIMENSION_RULES: DimensionRule[] = [
  {
    dimensionCode: 'RES-1', // Strategic
    keywords: ['governance', 'gouvernance', 'capital', 'ownership', 'actionnariat', 'siège', 'headquarters', 'eu/eea', 'ue', 'stratégique', 'board', 'conseil', 'contrôle'],
    highSovereigntyKeywords: ['eu majority', 'entité française', 'droit français', 'capital européen', 'actionnariat européen', '100% eu', 'filiale autonome', 'sans ingérence'],
    mediumSovereigntyKeywords: ['eu subsidiary', 'joint venture', 'gouvernance mixte', 'accord contractuel', 'partenariat'],
    lowSovereigntyKeywords: ['us parent', 'siège américain', 'us headquarters', 'non-eu ownership', 'filiale sous contrôle us'],
  },
  {
    dimensionCode: 'RES-2', // Legal / Jurisdictional
    keywords: ['cloud act', 'fisa', 'extraterritorial', 'juridiction', 'dpa', 'scc', 'rgpd', 'gdpr', 'tribunal', 'warrant', 'mandat', 'anonymisation', 'immunité', 'compliance', 'souveraineté juridique'],
    highSovereigntyKeywords: ['immunité cloud act', 'exclusivité droit français', 'secnumcloud', 'anonymisation totale', 'aucune juridiction extraterritoriale', 'rejet systématique'],
    mediumSovereigntyKeywords: ['clauses contractuelles types', 'scc', 'dpa', 'notification client', 'chiffrement avec clés locales'],
    lowSovereigntyKeywords: ['soumis au cloud act', 'fisa 702', 'extraterritorialité us', 'accréditation non souveraine', 'accès autorités étrangères'],
  },
  {
    dimensionCode: 'RES-3', // Data & AI
    keywords: ['encryption', 'chiffrement', 'byok', 'kyok', 'hsm', 'data residency', 'résidence des données', 'ai models', 'modèles ia', 'open source model', 'entraînement', 'suppression', 'erasure'],
    highSovereigntyKeywords: ['kyok', 'fips 140-2 level 4', 'clés exclusives client', 'données strictement en france', 'données strictement en ue', 'modèle open-source souverain', 'air-gap', 'effacement certifié'],
    mediumSovereigntyKeywords: ['byok', 'chiffrement client', 'région paris', 'région francfort', 'données stockées en europe', 'watsonx on-premise'],
    lowSovereigntyKeywords: ['clés gérées par le fournisseur', 'données répliquées hors ue', 'black box ai', 'modèle propriétaire hébergé aux usa', 'télémétrie non contrôlée'],
  },
  {
    dimensionCode: 'RES-4', // Operational
    keywords: ['support', 'exploitation', 'openshift', 'portabilité', 'autonomie', 'on-premise', 'runbooks', 'compétences', 'astreinte', 'ingénieurs', 'opérateurs', 'migration'],
    highSovereigntyKeywords: ['exploitation 100% ue', 'opérateurs habilités', 'personnel français', 'runbook autonome', 'déconnecté', 'air-gapped', 'open source standard', 'portabilité complète'],
    mediumSovereigntyKeywords: ['support ue avec escalade', 'support garanti heures ouvrées eu', 'déployable sur site', 'openshift multi-cloud'],
    lowSovereigntyKeywords: ['support 24/7 mondial', 'accès direct non-eu', 'ingénieurs us', 'dépendance opérationnelle forte', 'lock-in propriétaire'],
  },
  {
    dimensionCode: 'RES-5', // Supply Chain
    keywords: ['supply chain', 'fournisseurs', 'matériel', 'hardware', 'firmware', 'sbom', 'composants', 'code source', 'dépendance', 'sous-traitant'],
    highSovereigntyKeywords: ['sbom complète', 'composants européens', 'fabrication ue', 'open-source certifié', 'audit fournisseurs complet'],
    mediumSovereigntyKeywords: ['sbom disponible', 'composants standardisés', 'multi-sourcing', 'open-source auditable'],
    lowSovereigntyKeywords: ['matériel propriétaire boîte noire', 'supply chain non divulguée', 'fournisseur unique étranger', 'firmware opaque'],
  },
  {
    dimensionCode: 'RES-6', // Technological
    keywords: ['api', 'standards ouverts', 'open source', 'interopérabilité', 'kubernetes', 'linux', 'openapi', 'rest', 'architecture', 'protocole', 'lock-in'],
    highSovereigntyKeywords: ['100% open source', 'standards ouverts w3c / ietf / oci', 'apis ouvertes', 'sans vendor lock-in', 'architecture entièrement documentée'],
    mediumSovereigntyKeywords: ['openapi 3.0', 'compatibilité kubernetes', 'rest apis documentées', 'formats d\'export standards'],
    lowSovereigntyKeywords: ['protocole propriétaire fermé', 'code fermé sans audit', 'api propriétaire fermée', 'formats de données opaques'],
  },
  {
    dimensionCode: 'RES-7', // Security & Compliance
    keywords: ['iso 27001', 'soc 2', 'nis2', 'dora', 'secnumcloud', 'anssi', 'audit', 'soc', 'siem', 'csirt', 'patch', 'vulnérabilité', 'fips'],
    highSovereigntyKeywords: ['secnumcloud 3.2', 'anssi', 'soc 100% ue', 'dora & nis2 natif', 'audit souverain', 'patch autonome sans dépendance', 'fips 140-2 level 4'],
    mediumSovereigntyKeywords: ['iso 27001', 'soc 2 type ii', 'conformité rgpd', 'soc hybride', 'politique divulgation vulnérabilités'],
    lowSovereigntyKeywords: ['aucune certification ue', 'soc exclusivement hors ue', 'audit tiers refusé', 'patch sous contrôle strict éditeur us'],
  },
  {
    dimensionCode: 'RES-8', // Environmental
    keywords: ['pue', 'énergie renouvelable', 'net-zero', 'carbone', 'scope 1', 'scope 2', 'scope 3', 'esg', 'recyclage', 'durabilité', 'consommation'],
    highSovereigntyKeywords: ['pue < 1.2', '100% énergies renouvelables ue', 'audit carbone eu', 'cycle de vie circulaire certifié'],
    mediumSovereigntyKeywords: ['pue < 1.5', 'rapport esg annuel', 'centres de données ue verts', 'engagement net zéro'],
    lowSovereigntyKeywords: ['aucune donnée pue', 'énergie non traçable', 'absence de politique recyclage'],
  },
];

@Injectable({ providedIn: 'root' })
export class DocumentRagService {

  /**
   * Parse uploaded file to extract text content
   */
  async extractTextFromFile(file: File): Promise<string> {
    const extension = file.name.split('.').pop()?.toLowerCase();

    if (extension === 'txt' || extension === 'md' || extension === 'markdown' || extension === 'csv' || extension === 'json' || extension === 'yaml' || extension === 'yml') {
      return await file.text();
    }

    // For PDF, Word, or other formats, we read the binary data as text or raw chunks
    try {
      const text = await file.text();
      // Clean readable ASCII/UTF-8 strings
      const printable = text.replace(/[^\x20-\x7E\xC0-\xFF\n\r\t]/g, ' ');
      if (printable.trim().length > 100) {
        return printable;
      }
    } catch {
      // Fallback
    }

    return `Document: ${file.name} (Taille: ${Math.round(file.size / 1024)} KB)`;
  }

  /**
   * Perform RAG-style semantic & keyword retrieval over the document to assess the 8 IRN/CSF dimensions
   */
  analyzeDocument(fileName: string, fileSize: number, text: string): DocumentRagAnalysis {
    const lowerText = text.toLowerCase();
    const paragraphs = text
      .split(/\n\s*\n/)
      .map(p => p.trim())
      .filter(p => p.length > 20);

    const evidences: Record<string, RagEvidence> = {};

    // Detect potential product name and provider
    let detectedProductName = '';
    let detectedCategory = 'Document Analysé (RAG)';
    let detectedProvider = '';

    // Provider matching
    if (lowerText.includes('ibm') || lowerText.includes('watsonx') || lowerText.includes('red hat')) {
      detectedProvider = 'IBM / Red Hat';
    } else if (lowerText.includes('ovh') || lowerText.includes('ovhcloud')) {
      detectedProvider = 'OVHcloud';
    } else if (lowerText.includes('s3ns') || lowerText.includes('thales')) {
      detectedProvider = 'S3NS (Thales)';
    } else if (lowerText.includes('bleu') || lowerText.includes('orange') || lowerText.includes('capgemini')) {
      detectedProvider = 'Bleu';
    } else if (lowerText.includes('scaleway')) {
      detectedProvider = 'Scaleway';
    } else if (lowerText.includes('cloud temple')) {
      detectedProvider = 'Cloud Temple';
    } else if (lowerText.includes('numspot') || lowerText.includes('docaposte')) {
      detectedProvider = 'NumSpot';
    } else if (lowerText.includes('aws') || lowerText.includes('amazon')) {
      detectedProvider = 'Amazon Web Services (AWS)';
    } else if (lowerText.includes('microsoft') || lowerText.includes('azure')) {
      detectedProvider = 'Microsoft Azure';
    } else if (lowerText.includes('google') || lowerText.includes('gcp')) {
      detectedProvider = 'Google Cloud';
    } else {
      detectedProvider = 'Fournisseur Tiers / Écosystème Détecté';
    }

    // Try finding title or first strong header
    const firstLine = text.trim().split('\n')[0]?.replace(/[#*_-]/g, '').trim();
    if (firstLine && firstLine.length < 80) {
      detectedProductName = firstLine;
    } else {
      detectedProductName = fileName.replace(/\.[^/.]+$/, '');
    }

    // Analyze each dimension with RAG rule scoring
    for (const rule of DIMENSION_RULES) {
      const detectedKeywords: string[] = [];
      const matchedSnippets: string[] = [];
      let highMatches = 0;
      let medMatches = 0;
      let lowMatches = 0;

      // Check high sovereignty indicators
      for (const kw of rule.highSovereigntyKeywords) {
        if (lowerText.includes(kw)) {
          detectedKeywords.push(kw);
          highMatches++;
        }
      }

      // Check medium sovereignty indicators
      for (const kw of rule.mediumSovereigntyKeywords) {
        if (lowerText.includes(kw) && !detectedKeywords.includes(kw)) {
          detectedKeywords.push(kw);
          medMatches++;
        }
      }

      // Check low sovereignty indicators
      for (const kw of rule.lowSovereigntyKeywords) {
        if (lowerText.includes(kw) && !detectedKeywords.includes(kw)) {
          detectedKeywords.push(kw);
          lowMatches++;
        }
      }

      // Generic topic keywords
      for (const kw of rule.keywords) {
        if (lowerText.includes(kw) && !detectedKeywords.includes(kw)) {
          detectedKeywords.push(kw);
        }
      }

      // Find matching snippet paragraphs
      for (const p of paragraphs) {
        const pLower = p.toLowerCase();
        const hasMatch = detectedKeywords.some(kw => pLower.includes(kw));
        if (hasMatch && matchedSnippets.length < 3) {
          // Truncate snippet
          const snippet = p.length > 280 ? p.slice(0, 280) + '...' : p;
          matchedSnippets.push(snippet);
        }
      }

      // Calculate suggested level (0-4)
      let suggestedLevel = 2; // Neutral default
      let confidence: 'High' | 'Medium' | 'Low' | 'Default' = 'Default';

      if (highMatches > 0 && highMatches >= lowMatches) {
        suggestedLevel = highMatches >= 2 ? 4 : 3;
        confidence = 'High';
      } else if (lowMatches > 0 && lowMatches > highMatches) {
        suggestedLevel = lowMatches >= 2 ? 0 : 1;
        confidence = 'High';
      } else if (medMatches > 0) {
        suggestedLevel = 2;
        confidence = 'Medium';
      } else if (detectedKeywords.length > 0) {
        suggestedLevel = 2;
        confidence = 'Low';
      }

      evidences[rule.dimensionCode] = {
        dimensionCode: rule.dimensionCode,
        detectedKeywords: detectedKeywords.slice(0, 6),
        matchedSnippets,
        confidence,
        suggestedLevel,
      };
    }

    const summary = `Document « ${fileName} » analysé via moteur RAG. ${Object.keys(evidences).length} dimensions évaluées avec identification automatique des clauses juridiques, des mécanismes cryptographiques et des garanties d'autonomie opérationnelle.`;

    return {
      fileName,
      fileSize,
      extractedTextLength: text.length,
      detectedProductName,
      detectedCategory,
      detectedProvider,
      evidences,
      summary,
      rawExcerpt: text.slice(0, 800),
    };
  }

  /**
   * Convert a RAG Analysis into a full ProductAssessment
   */
  createAssessmentFromRag(analysis: DocumentRagAnalysis, landingZone: LandingZone): ProductAssessment {
    const totalWeight = IRN_DIMENSIONS.reduce((s, d) => s + d.weight, 0); // 100

    const scores: IrnScore[] = IRN_DIMENSIONS.map(dim => {
      const evidence = analysis.evidences[dim.code];
      const baseScore = evidence ? evidence.suggestedLevel : 2;
      const modifier = landingZone.dimensionModifiers?.[dim.code] ?? 0;
      let adjustedScore = Math.max(0, Math.min(4, baseScore + modifier));

      // Build RAG-specific rationale
      let rationale = '';
      if (evidence && evidence.detectedKeywords.length > 0) {
        rationale = `Extrait RAG (${evidence.confidence}) : Détection de [${evidence.detectedKeywords.join(', ')}]. `;
        if (evidence.matchedSnippets.length > 0) {
          rationale += `« ${evidence.matchedSnippets[0].replace(/\n/g, ' ')} »`;
        }
      } else {
        rationale = `Évaluation par défaut basée sur le type de document et l'absence de clause explicite pour cette dimension.`;
      }

      let landingZoneImpact = '';
      if (modifier > 0) {
        landingZoneImpact = `Positionné sur ${landingZone.name} : gain de résilience (+${modifier}) grâce à ${landingZone.rationaleNote}`;
      } else if (modifier < 0) {
        landingZoneImpact = `Positionné sur ${landingZone.name} : pénalité de souveraineté (${modifier}) due à ${landingZone.rationaleNote}`;
      } else {
        landingZoneImpact = `Aligné sur le profil de base hébergé / déployé sur ${landingZone.name}.`;
      }

      return {
        dimensionCode: dim.code,
        baseScore,
        score: adjustedScore,
        sealLevel: SEAL_LEVELS[adjustedScore],
        rationale,
        landingZoneImpact,
        ragEvidence: evidence,
      };
    });

    const baseScores = scores.map(s => s.baseScore);
    const baseWeightedScore = IRN_DIMENSIONS.reduce((sum, dim, i) => sum + (baseScores[i] * dim.weight), 0) / totalWeight;
    const baseMinScore = baseScores.reduce((min, s) => Math.min(min, s), 4);
    const baseGlobalSeal = SEAL_LEVELS[Math.max(0, Math.min(baseMinScore, 4))];

    const weightedScore = IRN_DIMENSIONS.reduce((sum, dim, i) => sum + (scores[i].score * dim.weight), 0) / totalWeight;
    const minScore = scores.reduce((min, s) => Math.min(min, s.score), 4);
    const globalSeal = SEAL_LEVELS[Math.max(0, Math.min(minScore, 4))];

    return {
      productId: 'rag-upload-' + Date.now(),
      productName: analysis.detectedProductName || analysis.fileName,
      category: `${analysis.detectedCategory} (${analysis.detectedProvider})`,
      sourceMode: 'rag',
      ragAnalysis: analysis,
      landingZone,
      scores,
      globalScore: Math.round(weightedScore * 10) / 10,
      globalSeal,
      baseGlobalScore: Math.round(baseWeightedScore * 10) / 10,
      baseGlobalSeal,
    };
  }
}
