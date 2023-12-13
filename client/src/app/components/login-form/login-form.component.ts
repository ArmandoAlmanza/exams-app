import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-login-form',
	standalone: true,
	imports: [CommonModule, FontAwesomeModule],
	templateUrl: './login-form.component.html',
})
export class LoginFormComponent {
	faEnvelope = faEnvelope;
	faLock = faLock;

	login(event: Event) {
    event.preventDefault();
		alert('Logeado we');
	}
	@Output() toggle = new EventEmitter<void>();
}
