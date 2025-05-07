import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { PieMonochromeChartService } from './pie-monochrome-chart.service';

@Component({
    selector: 'app-pie-monochrome-chart',
    imports: [MatCardModule],
    templateUrl: './pie-monochrome-chart.component.html',
    styleUrl: './pie-monochrome-chart.component.scss'
})
export class PieMonochromeChartComponent {

    constructor(
        private pieMonochromeChartService: PieMonochromeChartService
    ) {}

    ngOnInit(): void {
        this.pieMonochromeChartService.loadChart();
    }

}