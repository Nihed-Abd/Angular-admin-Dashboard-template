import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-top-sellers:not(p)',
    imports: [MatCardModule, MatMenuModule, MatButtonModule],
    templateUrl: './top-sellers.component.html',
    styleUrl: './top-sellers.component.scss'
})
export class TopSellersComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}