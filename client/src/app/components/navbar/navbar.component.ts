import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { faHome, faBook, faAtlas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    FontAwesomeModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  faHome = faHome;
  logged = false;
  links = [
    { href: '/', title: 'Home', icon: faHome },
    { href: '/general-exam', title: 'General Exam', icon: faBook },
    { href: '/topic-exam', title: 'Topic Exam', icon: faAtlas },
  ];
  helloWorld() {
    alert('hello world');
  }
}
