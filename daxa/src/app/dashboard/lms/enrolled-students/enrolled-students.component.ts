import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-enrolled-students',
    imports: [MatCardModule],
    templateUrl: './enrolled-students.component.html',
    styleUrl: './enrolled-students.component.scss'
})
export class EnrolledStudentsComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}