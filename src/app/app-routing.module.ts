import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { LoginSucceedComponent } from './pages/login-succeed/login-succeed.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: 'loginSucceed', component: LoginSucceedComponent, canActivate: [AuthGuard] },
  { path: 'signup', component: SignUpComponent },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '' },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
