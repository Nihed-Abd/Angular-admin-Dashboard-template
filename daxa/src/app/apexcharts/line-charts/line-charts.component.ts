import { Component } from '@angular/core';
import { BasicLineChartComponent } from './basic-line-chart/basic-line-chart.component';
import { GradientLineChartComponent } from './gradient-line-chart/gradient-line-chart.component';
import { DashedLineChartComponent } from './dashed-line-chart/dashed-line-chart.component';
import { SteplineLineChartComponent } from './stepline-line-chart/stepline-line-chart.component';
import { BrushLineChartComponent } from './brush-line-chart/brush-line-chart.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-line-charts',
    imports: [RouterLink, BasicLineChartComponent, GradientLineChartComponent, DashedLineChartComponent, SteplineLineChartComponent, BrushLineChartComponent],
    templateUrl: './line-charts.component.html',
    styleUrl: './line-charts.component.scss'
})
export class LineChartsComponent {}