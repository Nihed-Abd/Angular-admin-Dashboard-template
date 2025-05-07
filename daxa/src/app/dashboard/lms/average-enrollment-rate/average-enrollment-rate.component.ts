import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AverageEnrollmentRateService } from './average-enrollment-rate.service';

@Component({
    selector: 'app-average-enrollment-rate',
    imports: [MatCardModule, MatMenuModule, MatButtonModule],
    templateUrl: './average-enrollment-rate.component.html',
    styleUrl: './average-enrollment-rate.component.scss'
})
export class AverageEnrollmentRateComponent {

    constructor(
        private averageEnrollmentRateService: AverageEnrollmentRateService
    ) {}

    ngOnInit(): void {
        this.averageEnrollmentRateService.loadChart();
    }

}