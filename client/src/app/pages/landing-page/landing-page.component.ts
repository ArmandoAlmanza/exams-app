import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../components/footer/footer.component';
import { faQuestion, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
	selector: 'app-landing-page',
	standalone: true,
	imports: [
		CommonModule,
		FooterComponent,
		FontAwesomeModule,
		RouterLink,
		RouterLinkActive,
	],
	templateUrl: './landing-page.component.html',
})
export class LandingPageComponent {
	faQuestion = faCircleInfo;
	screenWidht = window.innerWidth;
}
