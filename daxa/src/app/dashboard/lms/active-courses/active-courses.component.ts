import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-active-courses',
    imports: [MatCardModule],
    templateUrl: './active-courses.component.html',
    styleUrl: './active-courses.component.scss'
})
export class ActiveCoursesComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}