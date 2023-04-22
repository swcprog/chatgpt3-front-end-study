import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-succeed',
  templateUrl: './login-succeed.component.html',
  styleUrls: ['./login-succeed.component.scss'],
})
export class LoginSucceedComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 5000);
  }
}
