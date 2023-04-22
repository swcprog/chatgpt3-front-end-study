import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainersModule } from '../containers/containers.module';
import { ComponentsModule } from '../components/components.module';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginSucceedComponent } from './login-succeed/login-succeed.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, SignUpComponent, LoginSucceedComponent],
  imports: [CommonModule, ContainersModule, ComponentsModule, FormsModule],
})
export class PagesModule {}
