import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { PieDonutChartService } from './pie-donut-chart.service';

@Component({
    selector: 'app-pie-donut-chart',
    imports: [MatCardModule],
    templateUrl: './pie-donut-chart.component.html',
    styleUrl: './pie-donut-chart.component.scss'
})
export class PieDonutChartComponent {

    constructor(
        private pieDonutChartService: PieDonutChartService
    ) {}

    ngOnInit(): void {
        this.pieDonutChartService.loadChart();
    }

}