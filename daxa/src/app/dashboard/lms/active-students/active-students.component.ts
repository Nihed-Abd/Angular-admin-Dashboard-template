import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import { ActiveStudentsService } from './active-students.service';

@Component({
    selector: 'app-active-students',
    imports: [MatCardModule, MatMenuModule, MatButtonModule],
    templateUrl: './active-students.component.html',
    styleUrl: './active-students.component.scss'
})
export class ActiveStudentsComponent {

    constructor(
        public themeService: CustomizerSettingsService,
        private activeStudentsService: ActiveStudentsService
    ) {}

    ngOnInit(): void {
        this.activeStudentsService.loadChart();
    }

}