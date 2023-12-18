import { Component, EventEmitter, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
	selector: 'app-login-form',
	standalone: true,
	imports: [CommonModule, FontAwesomeModule, ReactiveFormsModule],
	templateUrl: './login-form.component.html',
})
export class LoginFormComponent {
	faEnvelope = faEnvelope;
	faLock = faLock;

	email = new FormControl('');
	password = new FormControl('');

	login(event: Event) {
		event.preventDefault();
		const user = {
			email: this.email.value,
			password: this.password.value,
		};
		if (user.email === 'armando@coca.com') {
			console.log('eres armando we');
			console.log(user);
		} else {
			console.log('no eres we');
			console.log(user);
		}
	}
	@Output() toggle = new EventEmitter<void>();
}
