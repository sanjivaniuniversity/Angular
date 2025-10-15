import { Routes } from '@angular/router';
import { LoginValidationComponent } from './components/login-validation/login-validation.component';
import { DarkModeComponent } from './components/dark-mode/dark-mode.component';
import { CharCounterComponent } from './components/char-counter/char-counter.component';
import { SlideshowComponent } from './components/slideshow/slideshow.component';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { ChangeColorComponent } from './components/change-color/change-color.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { SimpleLoginComponent } from './components/simple-login/simple-login.component';
import { FeedbackComponent } from './components/feedback/feedback.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'login-validation', pathMatch: 'full' },
  { path: 'login-validation', component: LoginValidationComponent },
  { path: 'dark-mode', component: DarkModeComponent },
  { path: 'char-counter', component: CharCounterComponent },
  { path: 'slideshow', component: SlideshowComponent },
  { path: 'order-form', component: OrderFormComponent },
  { path: 'change-color', component: ChangeColorComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'simple-login', component: SimpleLoginComponent },
  { path: 'feedback', component: FeedbackComponent },
];
