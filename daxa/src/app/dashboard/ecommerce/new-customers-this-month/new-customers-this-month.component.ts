import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-new-customers-this-month',
    imports: [MatCardModule],
    templateUrl: './new-customers-this-month.component.html',
    styleUrl: './new-customers-this-month.component.scss'
})
export class NewCustomersThisMonthComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}