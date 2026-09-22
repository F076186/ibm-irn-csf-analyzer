import {
  Component, Input, OnChanges, ViewChild, ElementRef, AfterViewInit, OnDestroy
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Chart, RadarController, RadialLinearScale, PointElement, LineElement,
  Filler, Tooltip, Legend
} from 'chart.js';
import { ProductAssessment } from '../../models/irn-csf.model';
import { IRN_DIMENSIONS } from '../../models/irn-csf.model';

Chart.register(RadarController, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

@Component({
  selector: 'app-spider-chart',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="chart-wrapper">
      <canvas #chartCanvas></canvas>
    </div>
  `,
  styles: [`
    .chart-wrapper {
      width: 100%;
      max-width: 560px;
      margin: 0 auto;
      background: #fff;
      border-radius: 12px;
      padding: 16px;
    }
    canvas {
      display: block;
      width: 100% !important;
    }
  `],
})
export class SpiderChartComponent implements OnChanges, AfterViewInit, OnDestroy {
  @Input() assessment!: ProductAssessment;
  @ViewChild('chartCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  private chart: Chart | null = null;
  private ready = false;

  ngAfterViewInit(): void {
    this.ready = true;
    if (this.assessment) { this.render(); }
  }

  ngOnChanges(): void {
    if (this.ready && this.assessment) { this.render(); }
  }

  ngOnDestroy(): void {
    this.chart?.destroy();
  }

  private render(): void {
    if (this.chart) {
      this.chart.destroy();
      this.chart = null;
    }

    const labels = IRN_DIMENSIONS.map(d => `${d.code}\n${d.labelFr}`);
    const values = this.assessment.scores.map(s => s.score);
    const baseValues = this.assessment.scores.map(s => s.baseScore);
    const sealColors = this.assessment.scores.map(s => s.sealLevel.color);

    const ctx = this.canvasRef.nativeElement.getContext('2d')!;

    this.chart = new Chart(ctx, {
      type: 'radar',
      data: {
        labels,
        datasets: [
          {
            label: `${this.assessment.productName} (Sur ${this.assessment.landingZone.name})`,
            data: values,
            backgroundColor: 'rgba(59, 130, 212, 0.22)',
            borderColor: '#1d4ed8',
            borderWidth: 2.5,
            pointBackgroundColor: sealColors,
            pointBorderColor: sealColors,
            pointRadius: 6,
            pointHoverRadius: 8,
          },
          {
            label: `${this.assessment.productName} (Profil Standard / Baseline)`,
            data: baseValues,
            backgroundColor: 'transparent',
            borderColor: '#9ca3af',
            borderWidth: 1.5,
            borderDash: [5, 5],
            pointBackgroundColor: '#9ca3af',
            pointBorderColor: '#9ca3af',
            pointRadius: 4,
            pointHoverRadius: 6,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          r: {
            min: 0,
            max: 4,
            ticks: {
              stepSize: 1,
              font: { size: 11 },
              color: '#57606a',
              callback: (v) => {
                const labels: Record<number, string> = {
                  0: 'SEAL-0', 1: 'SEAL-1', 2: 'SEAL-2', 3: 'SEAL-3', 4: 'SEAL-4',
                };
                return labels[v as number] ?? v;
              },
              backdropColor: 'transparent',
            },
            pointLabels: {
              font: { size: 10.5, weight: 'bold' },
              color: '#1f2328',
            },
            grid: { color: '#e5e7eb' },
            angleLines: { color: '#e5e7eb' },
          },
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (ctx) => {
                const dim = IRN_DIMENSIONS[ctx.dataIndex];
                const score = this.assessment.scores[ctx.dataIndex];
                return [
                  ` Score: SEAL-${score.score} — ${score.sealLevel.label}`,
                  ` ${dim.csfCode}: ${dim.labelEn}`,
                ];
              },
            },
          },
        },
      },
    });
  }
}
