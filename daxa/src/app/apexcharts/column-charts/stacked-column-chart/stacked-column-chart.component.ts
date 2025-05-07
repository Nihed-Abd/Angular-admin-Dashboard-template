import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { StackedColumnChartService } from './stacked-column-chart.service';

@Component({
    selector: 'app-stacked-column-chart',
    imports: [MatCardModule],
    templateUrl: './stacked-column-chart.component.html',
    styleUrl: './stacked-column-chart.component.scss'
})
export class StackedColumnChartComponent {

    constructor(
        private stackedColumnChartService: StackedColumnChartService
    ) {}

    ngOnInit(): void {
        this.stackedColumnChartService.loadChart();
    }

}