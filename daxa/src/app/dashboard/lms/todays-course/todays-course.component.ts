import { Component, } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-todays-course',
    imports: [MatCardModule, RouterLink, CarouselModule, MatButtonModule],
    templateUrl: './todays-course.component.html',
    styleUrl: './todays-course.component.scss'
})
export class TodaysCourseComponent {

    todaysCourseSlides: OwlOptions = {
        items: 1,
		nav: false,
		margin: 25,
		loop: true,
		dots: true,
		autoplay: true,
        animateOut: 'fadeOut',
  		animateIn: 'fadeIn',
		autoplayHoverPause: true
    }

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}