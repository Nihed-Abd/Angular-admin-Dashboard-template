import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { BasicScatterChartService } from './basic-scatter-chart.service';

@Component({
    selector: 'app-basic-scatter-chart',
    imports: [MatCardModule],
    templateUrl: './basic-scatter-chart.component.html',
    styleUrl: './basic-scatter-chart.component.scss'
})
export class BasicScatterChartComponent {

    constructor(
        private basicScatterChartService: BasicScatterChartService
    ) {}

    ngOnInit(): void {
        this.basicScatterChartService.loadChart();
    }

}