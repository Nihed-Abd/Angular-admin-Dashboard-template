import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BasicRadialbarChartComponent } from './basic-radialbar-chart/basic-radialbar-chart.component';
import { MultipleRadialbarChartComponent } from './multiple-radialbar-chart/multiple-radialbar-chart.component';
import { CustomAngleCircleRadialbarChartComponent } from './custom-angle-circle-radialbar-chart/custom-angle-circle-radialbar-chart.component';
import { GradientRadialbarChartComponent } from './gradient-radialbar-chart/gradient-radialbar-chart.component';
import { StrockedCircularGaugeRadialbarChartComponent } from './strocked-circular-gauge-radialbar-chart/strocked-circular-gauge-radialbar-chart.component';
import { SemiCircularGaugeRadialbarChartComponent } from './semi-circular-gauge-radialbar-chart/semi-circular-gauge-radialbar-chart.component';

@Component({
    selector: 'app-radial-bar-charts',
    imports: [RouterLink, BasicRadialbarChartComponent, MultipleRadialbarChartComponent, CustomAngleCircleRadialbarChartComponent, GradientRadialbarChartComponent, StrockedCircularGaugeRadialbarChartComponent, SemiCircularGaugeRadialbarChartComponent],
    templateUrl: './radial-bar-charts.component.html',
    styleUrl: './radial-bar-charts.component.scss'
})
export class RadialBarChartsComponent {}