import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  email!: string;
  password!: string;
  constructor(private authService: AuthService, private router: Router) {}

  autenticar() {
    this.authService.autenticar(this.email, this.password);
    this.router.navigate(['/loginSucceed']);
  }

  onBlur() {
    const input = document.getElementById('email');
    input?.classList.add('touched');
  }
}
