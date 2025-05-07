import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { PaidCoursesComponent } from './paid-courses/paid-courses.component';
import { FreeCoursesComponent } from './free-courses/free-courses.component';
import { TopRatedCoursesComponent } from './top-rated-courses/top-rated-courses.component';
import { BestSellerCoursesComponent } from './best-seller-courses/best-seller-courses.component';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-courses',
    imports: [MatCardModule, MatMenuModule, MatButtonModule, MatTabsModule, AllCoursesComponent, PaidCoursesComponent, FreeCoursesComponent, TopRatedCoursesComponent, BestSellerCoursesComponent],
    templateUrl: './courses.component.html',
    styleUrl: './courses.component.scss'
})
export class CoursesComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}