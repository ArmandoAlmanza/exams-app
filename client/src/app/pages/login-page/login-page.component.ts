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
})
export class LoginPageComponent {
	formState: 'login' | 'register' = 'login';

	toggleForm() {
		this.formState = this.formState === 'login' ? 'register' : 'login';
	}
}
