import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductAssessment, IrnScore, IRN_DIMENSIONS } from '../../models/irn-csf.model';

@Component({
  selector: 'app-dimension-table',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="dim-table" *ngIf="assessment">
      <h3 class="section-title">Détail par Dimension IRN</h3>
      <table>
        <thead>
          <tr>
            <th>Code</th>
            <th>Dimension IRN (FR)</th>
            <th>CSF Code</th>
            <th>Poids</th>
            <th>Score</th>
            <th>Niveau SEAL</th>
            <th class="rationale-col">Justification</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let score of assessment.scores; let i = index">
            <td><span class="code-badge">{{ score.dimensionCode }}</span></td>
            <td>
              <strong>{{ dimensions[i].labelFr }}</strong>
              <br><span class="label-en">{{ dimensions[i].labelEn }}</span>
            </td>
            <td><span class="csf-badge">{{ dimensions[i].csfCode }}</span></td>
            <td class="center">{{ dimensions[i].weight }}%</td>
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
            <td class="rationale-col">{{ score.rationale }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr class="total-row">
            <td colspan="3"><strong>Score Global Pondéré</strong></td>
            <td class="center">100%</td>
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
            <td class="rationale-col"></td>
          </tr>
        </tfoot>
      </table>
    </div>
  `,
  styles: [`
    .section-title {
      font-size: 15px;
      font-weight: 700;
      color: #1f2328;
      margin: 0 0 12px;
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
    .rationale-col {
      max-width: 280px;
      font-size: 11px;
      color: #57606a;
      line-height: 1.5;
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
