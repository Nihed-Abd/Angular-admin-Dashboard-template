import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { BasicBubbleChartService } from './basic-bubble-chart.service';

@Component({
    selector: 'app-basic-bubble-chart',
    imports: [MatCardModule],
    templateUrl: './basic-bubble-chart.component.html',
    styleUrl: './basic-bubble-chart.component.scss'
})
export class BasicBubbleChartComponent {

    constructor(
        private basicBubbleChartService: BasicBubbleChartService
    ) {}

    ngOnInit(): void {
        this.basicBubbleChartService.loadChart();
    }

}