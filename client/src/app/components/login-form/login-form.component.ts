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
		alert('Logeado we');
	}
	@Output() toggle = new EventEmitter<void>();
}
