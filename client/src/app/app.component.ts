import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Router, NavigationEnd } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [CommonModule, RouterOutlet, NavbarComponent, BrowserAnimationsModule],
	templateUrl: './app.component.html',
})
export class AppComponent {
	showNavbar = true;

	constructor(private router: Router) {
		this.router.events.subscribe((event) => {
			if (event instanceof NavigationEnd) {
				this.showNavbar = this.shouldShowNavbar(event.url);
			}
		});
	}

	private shouldShowNavbar(url: string): boolean {
		const excludedRoutes = ['/', '/auth'];

		return !excludedRoutes.includes(url);
	}
}
