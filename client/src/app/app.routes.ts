import { Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'auth', component: LoginPageComponent },
];
