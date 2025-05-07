import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MultipleRadarChartService } from './multiple-radar-chart.service';

@Component({
    selector: 'app-multiple-radar-chart',
    imports: [MatCardModule],
    templateUrl: './multiple-radar-chart.component.html',
    styleUrl: './multiple-radar-chart.component.scss'
})
export class MultipleRadarChartComponent {

    constructor(
        private multipleRadarChartService: MultipleRadarChartService
    ) {}

    ngOnInit(): void {
        this.multipleRadarChartService.loadChart();
    }

}