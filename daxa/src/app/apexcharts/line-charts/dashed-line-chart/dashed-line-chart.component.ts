import { Component } from "@angular/core";
import { MatCardModule } from '@angular/material/card';
import { DashedLineChartService } from "./dashed-line-chart.service";

@Component({
    selector: 'app-dashed-line-chart',
    imports: [MatCardModule],
    templateUrl: './dashed-line-chart.component.html',
    styleUrl: './dashed-line-chart.component.scss'
})
export class DashedLineChartComponent {

    constructor(
        private dashedLineChartService: DashedLineChartService
    ) {}

    ngOnInit(): void {
        this.dashedLineChartService.loadChart();
    }

}