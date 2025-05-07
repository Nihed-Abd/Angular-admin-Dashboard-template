import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-best-seller-of-the-month',
    imports: [MatCardModule, MatMenuModule, MatButtonModule, RouterLink],
    templateUrl: './best-seller-of-the-month.component.html',
    styleUrl: './best-seller-of-the-month.component.scss'
})
export class BestSellerOfTheMonthComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}