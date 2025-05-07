import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { RevenueService } from './revenue.service';

@Component({
    selector: 'app-revenue',
    imports: [MatCardModule, MatMenuModule, MatButtonModule],
    templateUrl: './revenue.component.html',
    styleUrl: './revenue.component.scss'
})
export class RevenueComponent {
    
    constructor(private revenueService: RevenueService) {}

    ngOnInit(): void {
        this.revenueService.loadChart();
    }

}