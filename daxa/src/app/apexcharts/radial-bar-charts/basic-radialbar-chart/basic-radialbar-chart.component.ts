import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { BasicRadialbarChartService } from './basic-radialbar-chart.service';

@Component({
    selector: 'app-basic-radialbar-chart',
    imports: [MatCardModule],
    templateUrl: './basic-radialbar-chart.component.html',
    styleUrl: './basic-radialbar-chart.component.scss'
})
export class BasicRadialbarChartComponent {

    constructor(
        private basicRadialbarChartService: BasicRadialbarChartService
    ) {}

    ngOnInit(): void {
        this.basicRadialbarChartService.loadChart();
    }

}