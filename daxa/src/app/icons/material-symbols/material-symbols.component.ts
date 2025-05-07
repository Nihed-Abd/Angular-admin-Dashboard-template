import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-material-symbols',
    imports: [RouterLink, MatMenuModule, MatButtonModule, MatCardModule],
    templateUrl: './material-symbols.component.html',
    styleUrl: './material-symbols.component.scss'
})
export class MaterialSymbolsComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}