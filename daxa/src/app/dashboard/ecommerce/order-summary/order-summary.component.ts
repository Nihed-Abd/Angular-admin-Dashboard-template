import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { OrderSummaryService } from './order-summary.service';

@Component({
    selector: 'app-order-summary',
    imports: [MatCardModule, MatMenuModule, MatButtonModule],
    templateUrl: './order-summary.component.html',
    styleUrl: './order-summary.component.scss'
})
export class OrderSummaryComponent {

    constructor(private orderSummaryService: OrderSummaryService) {}

    ngOnInit(): void {
        this.orderSummaryService.loadChart();
    }

}