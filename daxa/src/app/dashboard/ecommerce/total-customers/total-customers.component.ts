import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-total-customers',
    imports: [MatCardModule],
    templateUrl: './total-customers.component.html',
    styleUrl: './total-customers.component.scss'
})
export class TotalCustomersComponent {}