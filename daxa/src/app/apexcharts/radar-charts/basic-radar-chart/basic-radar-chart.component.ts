import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { BasicRadarChartService } from './basic-radar-chart.service';

@Component({
    selector: 'app-basic-radar-chart',
    imports: [MatCardModule],
    templateUrl: './basic-radar-chart.component.html',
    styleUrl: './basic-radar-chart.component.scss'
})
export class BasicRadarChartComponent {

    constructor(
        private basicRadarChartService: BasicRadarChartService
    ) {}

    ngOnInit(): void {
        this.basicRadarChartService.loadChart();
    }

}