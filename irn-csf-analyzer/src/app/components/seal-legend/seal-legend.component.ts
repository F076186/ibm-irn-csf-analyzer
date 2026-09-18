import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SEAL_LEVELS, SealLevel } from '../../models/irn-csf.model';

@Component({
  selector: 'app-seal-legend',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="seal-legend">
      <h4>Niveaux SEAL — CSF Sovereignty Effective Assurance Levels</h4>
      <div class="seal-items">
        <div *ngFor="let level of sealLevels"
             class="seal-item"
             [class.active]="active === level.level"
             [style.border-left-color]="level.color">
          <span class="seal-badge" [style.background-color]="level.color">{{ level.code }}</span>
          <div class="seal-text">
            <strong>{{ level.label }}</strong>
            <p>{{ level.description }}</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .seal-legend {
      background: #f7f8fa;
      border-radius: 10px;
      padding: 16px;
    }
    h4 {
      font-size: 13px;
      font-weight: 700;
      color: #57606a;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      margin: 0 0 12px;
    }
    .seal-items { display: flex; flex-direction: column; gap: 8px; }
    .seal-item {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      padding: 8px 10px;
      background: #fff;
      border-left: 4px solid #e5e7eb;
      border-radius: 6px;
      transition: border-left-color 0.2s, box-shadow 0.2s;
    }
    .seal-item.active {
      box-shadow: 0 0 0 2px rgba(59,130,212,0.25);
    }
    .seal-badge {
      font-size: 11px;
      font-weight: 700;
      color: #fff;
      padding: 2px 8px;
      border-radius: 10px;
      white-space: nowrap;
      margin-top: 2px;
    }
    .seal-text strong { font-size: 13px; color: #1f2328; }
    .seal-text p { font-size: 11px; color: #57606a; margin: 2px 0 0; line-height: 1.45; }
  `],
})
export class SealLegendComponent {
  sealLevels = SEAL_LEVELS;
  @Input() active: number | null = null;
}
