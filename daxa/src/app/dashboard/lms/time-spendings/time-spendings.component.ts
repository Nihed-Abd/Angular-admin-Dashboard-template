import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { TimeSpendingsService } from './time-spendings.service';

@Component({
    selector: 'app-time-spendings',
    imports: [MatCardModule, MatMenuModule, MatButtonModule],
    templateUrl: './time-spendings.component.html',
    styleUrl: './time-spendings.component.scss'
})
export class TimeSpendingsComponent {

    constructor(
        private timeSpendingsService: TimeSpendingsService
    ) {}

    ngOnInit(): void {
        this.timeSpendingsService.loadChart();
    }

}