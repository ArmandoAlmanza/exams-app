import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
	selector: 'app-footer',
	standalone: true,
	imports: [CommonModule, FontAwesomeModule],
	templateUrl: './footer.component.html',
})
export class FooterComponent {
	faHomme = faHome;

	links = [
		{
			href: 'https://github.com/ArmandoAlmanza/',
			icon: '/assets/icons/github.svg',
			alt: "github icon"
		},
		{
			href: 'https://www.linkedin.com/in/armando-almanza/',
			icon: '/assets/icons/linkedin.svg',
			alt: "linkedin icon"
		},
		{
			href: 'https://www.instagram.com/arandano_triston/',
			icon: '/assets/icons/instagram.svg',
			alt: "instagram icon"
		},
	];
}
