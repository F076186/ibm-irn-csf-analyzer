import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductAssessment, IrnScore, IRN_DIMENSIONS } from '../../models/irn-csf.model';

@Component({
  selector: 'app-dimension-table',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="dim-table" *ngIf="assessment">
      <div class="table-header-flex">
        <h3 class="section-title">Détail par Dimension IRN & CSF</h3>
        <div class="lz-context-chip">
          <span>Déployé sur : <strong>{{ assessment.landingZone.name }}</strong></span>
          <span class="badge-secnum" *ngIf="assessment.landingZone.secNumCloud">SecNumCloud</span>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Code</th>
            <th>Dimension IRN (FR) / CSF</th>
            <th>Poids</th>
            <th>Score Base</th>
            <th>Score Ajusté (LZ)</th>
            <th>Niveau SEAL</th>
            <th class="rationale-col">Justification & Impact Zone d'Atterrissage</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let score of assessment.scores; let i = index">
            <td>
              <span class="code-badge">{{ score.dimensionCode }}</span>
              <br><span class="csf-badge">{{ dimensions[i].csfCode }}</span>
            </td>
            <td>
              <strong>{{ dimensions[i].labelFr }}</strong>
              <br><span class="label-en">{{ dimensions[i].labelEn }}</span>
            </td>
            <td class="center">{{ dimensions[i].weight }}%</td>
            <td class="center">
              <span class="base-score-pill">{{ score.baseScore }}/4</span>
            </td>
            <td class="center">
              <span class="score-dot" [style.background-color]="score.sealLevel.color">
                {{ score.score }}
              </span>
            </td>
            <td>
              <span class="seal-chip" [style.background-color]="score.sealLevel.color">
                {{ score.sealLevel.code }}
              </span>
              <span class="seal-label">{{ score.sealLevel.label }}</span>
            </td>
            <td class="rationale-col">
              <p class="product-rationale">{{ score.rationale }}</p>
              <p class="lz-rationale" *ngIf="score.landingZoneImpact">
                <strong>Impact LZ :</strong> {{ score.landingZoneImpact }}
              </p>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr class="total-row">
            <td colspan="2"><strong>Score Global Pondéré</strong></td>
            <td class="center">100%</td>
            <td class="center">
              <span class="base-score-pill">{{ assessment.baseGlobalScore }}/4</span>
            </td>
            <td class="center">
              <span class="score-dot" [style.background-color]="assessment.globalSeal.color">
                {{ assessment.globalScore }}
              </span>
            </td>
            <td>
              <span class="seal-chip" [style.background-color]="assessment.globalSeal.color">
                {{ assessment.globalSeal.code }}
              </span>
              <span class="seal-label">{{ assessment.globalSeal.label }}</span>
            </td>
            <td class="rationale-col">
              <em>SEAL global calculé selon la règle du minimum sur les 8 dimensions (conforme calculateur Excel CSF).</em>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  `,
  styles: [`
    .table-header-flex {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;
      flex-wrap: wrap;
      gap: 8px;
    }
    .section-title {
      font-size: 15px;
      font-weight: 700;
      color: #1f2328;
      margin: 0;
    }
    .lz-context-chip {
      font-size: 12px;
      color: #374151;
      background: #f3f4f6;
      padding: 4px 10px;
      border-radius: 6px;
      border: 1px solid #e5e7eb;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .badge-secnum {
      background: #047857;
      color: #fff;
      font-size: 10px;
      font-weight: 700;
      padding: 2px 6px;
      border-radius: 4px;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      font-size: 12.5px;
    }
    th {
      background: #1d4ed8;
      color: #fff;
      text-align: left;
      padding: 10px 12px;
      font-weight: 600;
      font-size: 11.5px;
    }
    td {
      padding: 9px 12px;
      border-bottom: 1px solid #e5e7eb;
      vertical-align: middle;
      color: #1f2328;
    }
    tr:nth-child(even) td { background: #f7f8fa; }
    tr:hover td { background: #eef2ff; }
    .center { text-align: center; }
    .code-badge {
      background: #1d4ed8;
      color: #fff;
      font-size: 11px;
      font-weight: 700;
      padding: 2px 8px;
      border-radius: 10px;
    }
    .csf-badge {
      background: #7c5cd8;
      color: #fff;
      font-size: 11px;
      font-weight: 700;
      padding: 2px 8px;
      border-radius: 10px;
    }
    .label-en { font-size: 11px; color: #57606a; }
    .score-dot {
      display: inline-block;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      line-height: 28px;
      text-align: center;
      color: #fff;
      font-weight: 700;
      font-size: 13px;
    }
    .seal-chip {
      display: inline-block;
      color: #fff;
      font-size: 10.5px;
      font-weight: 700;
      padding: 2px 7px;
      border-radius: 8px;
      margin-right: 4px;
    }
    .seal-label { font-size: 11px; color: #57606a; }
    .base-score-pill {
      font-size: 11px;
      font-weight: 600;
      color: #6b7280;
      background: #e5e7eb;
      padding: 3px 6px;
      border-radius: 4px;
    }
    .rationale-col {
      max-width: 320px;
      font-size: 11px;
      color: #57606a;
      line-height: 1.4;
    }
    .product-rationale {
      margin: 0 0 4px 0;
    }
    .lz-rationale {
      margin: 0;
      color: #1d4ed8;
      font-size: 10.5px;
    }
    .total-row td {
      background: #1d4ed820 !important;
      font-weight: 600;
      border-top: 2px solid #1d4ed8;
    }
  `],
})
export class DimensionTableComponent {
  @Input() assessment!: ProductAssessment;
  dimensions = IRN_DIMENSIONS;
}
