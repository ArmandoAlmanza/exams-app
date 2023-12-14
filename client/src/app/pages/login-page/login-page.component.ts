import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from '../../components/login-form/login-form.component';
import { RegisterFormComponent } from '../../components/register-form/register-form.component';
import {
	animate,
	state,
	style,
	transition,
	trigger,
} from '@angular/animations';

@Component({
	selector: 'app-login-page',
	standalone: true,
	imports: [CommonModule, LoginFormComponent, RegisterFormComponent],
	templateUrl: './login-page.component.html',
	animations: [
		trigger('openClose', [
			// ...
			state(
				'login',
				style({
					height: '200px',
					opacity: 1,
					backgroundColor: 'yellow',
				})
			),
			state(
				'register',
				style({
					height: '100px',
					opacity: 0.8,
					backgroundColor: 'blue',
				})
			),
			transition('login => register', [animate('1s')]),
			transition('register => login', [animate('0.5s')]),
			transition('* => register', [animate('1s')]),
			transition('* => login', [animate('0.5s')]),
			transition('login <=> register', [animate('0.5s')]),
			transition('* => login', [animate('1s', style({ opacity: '*' }))]),
			transition('* => *', [animate('1s')]),
		]),
	],
})
export class LoginPageComponent {
	formState: 'login' | 'register' = 'login';

	toggleForm() {
		this.formState = this.formState === 'login' ? 'register' : 'login';
	}
}
