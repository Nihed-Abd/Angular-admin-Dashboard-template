import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { BasicPolarChartService } from './basic-polar-chart.service';

@Component({
    selector: 'app-basic-polar-chart',
    imports: [MatCardModule],
    templateUrl: './basic-polar-chart.component.html',
    styleUrl: './basic-polar-chart.component.scss'
})
export class BasicPolarChartComponent {

    constructor(
        private basicPolarChartService: BasicPolarChartService
    ) {}

    ngOnInit(): void {
        this.basicPolarChartService.loadChart();
    }

}