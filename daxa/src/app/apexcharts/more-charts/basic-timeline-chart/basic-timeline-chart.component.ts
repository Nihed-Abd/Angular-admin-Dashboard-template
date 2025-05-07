import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { BasicTimelineChartService } from './basic-timeline-chart.service';

@Component({
    selector: 'app-basic-timeline-chart',
    imports: [MatCardModule],
    templateUrl: './basic-timeline-chart.component.html',
    styleUrl: './basic-timeline-chart.component.scss'
})
export class BasicTimelineChartComponent {

    constructor(
        private basicTimelineChartService: BasicTimelineChartService
    ) {}

    ngOnInit(): void {
        this.basicTimelineChartService.loadChart();
    }

}