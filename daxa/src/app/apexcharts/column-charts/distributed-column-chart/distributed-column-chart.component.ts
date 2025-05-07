import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { DistributedColumnChartService } from './distributed-column-chart.service';

@Component({
    selector: 'app-distributed-column-chart',
    imports: [MatCardModule],
    templateUrl: './distributed-column-chart.component.html',
    styleUrl: './distributed-column-chart.component.scss'
})
export class DistributedColumnChartComponent {

    constructor(
        private distributedColumnChartService: DistributedColumnChartService
    ) {}

    ngOnInit(): void {
        this.distributedColumnChartService.loadChart();
    }

}