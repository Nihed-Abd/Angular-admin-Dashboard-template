import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { ProfitService } from './profit.service';

@Component({
    selector: 'app-profit',
    imports: [MatCardModule, MatMenuModule, MatButtonModule],
    templateUrl: './profit.component.html',
    styleUrl: './profit.component.scss'
})
export class ProfitComponent {

    constructor(private profitService: ProfitService) {}

    ngOnInit(): void {
        this.profitService.loadChart();
    }

}