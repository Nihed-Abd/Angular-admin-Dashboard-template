import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { BasicTreemapChartService } from './basic-treemap-chart.service';

@Component({
    selector: 'app-basic-treemap-chart',
    imports: [MatCardModule],
    templateUrl: './basic-treemap-chart.component.html',
    styleUrl: './basic-treemap-chart.component.scss'
})
export class BasicTreemapChartComponent {

    constructor(
        private basicTreemapChartService: BasicTreemapChartService
    ) {}

    ngOnInit(): void {
        this.basicTreemapChartService.loadChart();
    }

}