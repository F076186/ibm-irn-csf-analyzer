import { Injectable } from '@angular/core';
import {
  IRN_DIMENSIONS,
  SEAL_LEVELS,
  IrnScore,
  ProductAssessment,
  LandingZone,
  LANDING_ZONES
} from '../models/irn-csf.model';
import { IbmProduct } from '../data/ibm-products.data';
import { PRODUCT_SCORES, DEFAULT_SCORES } from '../data/irn-scoring.data';

@Injectable({ providedIn: 'root' })
export class AssessmentService {

  getLandingZones(): LandingZone[] {
    return LANDING_ZONES;
  }

  getDefaultLandingZone(): LandingZone {
    return LANDING_ZONES[0]; // On-Premises by default, or IBM Cloud
  }

  assess(product: IbmProduct, landingZone?: LandingZone): ProductAssessment {
    const lz = landingZone ?? this.getDefaultLandingZone();
    const entry = PRODUCT_SCORES[product.id] ?? DEFAULT_SCORES;
    
    // Evaluate base scores without landing zone modifier
    const baseScores: number[] = IRN_DIMENSIONS.map(dim => entry.scores[dim.code] ?? 2);
    const totalWeight = IRN_DIMENSIONS.reduce((s, d) => s + d.weight, 0); // 100

    const baseWeightedScore = IRN_DIMENSIONS.reduce((sum, dim, i) => {
      return sum + (baseScores[i] * dim.weight);
    }, 0) / totalWeight;
    const baseMinScore = baseScores.reduce((min, s) => Math.min(min, s), 4);
    const baseGlobalSeal = SEAL_LEVELS[Math.max(0, Math.min(baseMinScore, 4))];

    // Evaluate scores with landing zone positioning and modifiers
    const scores: IrnScore[] = IRN_DIMENSIONS.map(dim => {
      const baseScore = entry.scores[dim.code] ?? 2;
      const modifier = lz.dimensionModifiers?.[dim.code] ?? 0;
      
      // Calculate adjusted score bounded between 0 and 4
      let adjustedScore = baseScore + modifier;
      adjustedScore = Math.max(0, Math.min(4, adjustedScore));

      // Build contextual rationale for the landing zone impact
      let landingZoneImpact = '';
      if (modifier > 0) {
        landingZoneImpact = `Positionné sur ${lz.name} : gain de résilience (+${modifier}) grâce à ${lz.rationaleNote}`;
      } else if (modifier < 0) {
        landingZoneImpact = `Positionné sur ${lz.name} : pénalité de souveraineté (${modifier}) due à ${lz.rationaleNote}`;
      } else {
        landingZoneImpact = `Aligné sur le profil de base hébergé / déployé sur ${lz.name}.`;
      }

      return {
        dimensionCode: dim.code,
        baseScore,
        score: adjustedScore,
        sealLevel: SEAL_LEVELS[adjustedScore],
        rationale: entry.rationale[dim.code] ?? DEFAULT_SCORES.rationale[dim.code],
        landingZoneImpact,
      };
    });

    // Weighted global score (formula from Excel E1):
    const weightedScore = IRN_DIMENSIONS.reduce((sum, dim, i) => {
      return sum + (scores[i].score * dim.weight);
    }, 0) / totalWeight;

    // SEAL level = MIN of all per-dimension scores (mirrors Excel MIN(H5:H251) logic).
    const minScore = scores.reduce((min, s) => Math.min(min, s.score), 4);
    const globalSeal = SEAL_LEVELS[Math.max(0, Math.min(minScore, 4))];

    return {
      productId: product.id,
      productName: product.name,
      category: product.category,
      landingZone: lz,
      scores,
      globalScore: Math.round(weightedScore * 10) / 10,
      globalSeal,
      baseGlobalScore: Math.round(baseWeightedScore * 10) / 10,
      baseGlobalSeal,
    };
  }
}
