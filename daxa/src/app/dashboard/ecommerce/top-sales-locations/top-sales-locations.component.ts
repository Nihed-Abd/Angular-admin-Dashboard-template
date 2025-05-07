import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-top-sales-locations',
    imports: [MatCardModule, MatMenuModule, MatButtonModule],
    templateUrl: './top-sales-locations.component.html',
    styleUrl: './top-sales-locations.component.scss'
})
export class TopSalesLocationsComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}