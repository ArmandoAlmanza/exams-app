import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from '../../components/login-form/login-form.component';
import { RegisterFormComponent } from '../../components/register-form/register-form.component';

@Component({
	selector: 'app-login-page',
	standalone: true,
	imports: [CommonModule, LoginFormComponent, RegisterFormComponent],
	templateUrl: './login-page.component.html',
})
export class LoginPageComponent {
	showLoginForm = true;

	toggleRegister() {
		this.showLoginForm = !this.showLoginForm;
	}
}
