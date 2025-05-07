import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-total-instructors',
    imports: [MatCardModule],
    templateUrl: './total-instructors.component.html',
    styleUrl: './total-instructors.component.scss'
})
export class TotalInstructorsComponent {}