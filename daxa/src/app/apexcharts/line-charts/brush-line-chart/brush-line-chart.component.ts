import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { BrushLineChartService } from './brush-line-chart.service';
import { BrushLineChart2Service } from './brush-line-chart2.service';

@Component({
    selector: 'app-brush-line-chart',
    imports: [MatCardModule],
    templateUrl: './brush-line-chart.component.html',
    styleUrl: './brush-line-chart.component.scss'
})
export class BrushLineChartComponent {

    constructor(
        private brushLineChartService: BrushLineChartService,
        private brushLineChart2Service: BrushLineChart2Service
    ) {}

    ngOnInit(): void {
        this.brushLineChartService.loadChart();
        this.brushLineChart2Service.loadChart();
    }

}