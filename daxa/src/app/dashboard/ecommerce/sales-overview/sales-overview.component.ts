import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-sales-overview',
    imports: [MatCardModule],
    templateUrl: './sales-overview.component.html',
    styleUrl: './sales-overview.component.scss'
})
export class SalesOverviewComponent {

    @Input() progress: number = 74; // Input property to bind progress value

}