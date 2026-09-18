import { Injectable } from '@angular/core';
import { IRN_DIMENSIONS, SEAL_LEVELS, IrnScore, ProductAssessment } from '../models/irn-csf.model';
import { IbmProduct } from '../data/ibm-products.data';
import { PRODUCT_SCORES, DEFAULT_SCORES } from '../data/irn-scoring.data';

@Injectable({ providedIn: 'root' })
export class AssessmentService {

  assess(product: IbmProduct): ProductAssessment {
    const entry = PRODUCT_SCORES[product.id] ?? DEFAULT_SCORES;
    const scores: IrnScore[] = IRN_DIMENSIONS.map(dim => {
      const score = entry.scores[dim.code] ?? 2;
      return {
        dimensionCode: dim.code,
        score,
        sealLevel: SEAL_LEVELS[score],
        rationale: entry.rationale[dim.code] ?? DEFAULT_SCORES.rationale[dim.code],
      };
    });

    // Weighted global score
    const totalWeight = IRN_DIMENSIONS.reduce((s, d) => s + d.weight, 0);
    const globalScore = IRN_DIMENSIONS.reduce((sum, dim, i) => {
      return sum + (scores[i].score * dim.weight);
    }, 0) / totalWeight;

    const globalSealIdx = Math.round(globalScore);
    return {
      productId: product.id,
      productName: product.name,
      category: product.category,
      scores,
      globalScore: Math.round(globalScore * 10) / 10,
      globalSeal: SEAL_LEVELS[Math.min(globalSealIdx, 4)],
    };
  }
}
