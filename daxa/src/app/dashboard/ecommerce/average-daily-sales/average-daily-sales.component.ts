import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { AverageDailySalesService } from './average-daily-sales.service';

@Component({
    selector: 'app-average-daily-sales',
    imports: [MatCardModule, MatMenuModule, MatButtonModule],
    templateUrl: './average-daily-sales.component.html',
    styleUrl: './average-daily-sales.component.scss'
})
export class AverageDailySalesComponent {

    constructor(private averageDailySalesService: AverageDailySalesService) {}

    ngOnInit(): void {
        this.averageDailySalesService.loadChart();
    }

}