import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  emailRegistrado = 'test@email.com';
  senhaRegistrada = 'test';

  estaAutenticado = false;

  autenticar(email: string, senha: string) {
    if (email === this.emailRegistrado && senha === this.senhaRegistrada) {
      this.estaAutenticado = true;
    } else {
      this.estaAutenticado = false;
    }

    console.log(this.estaAutenticado);
  }

  usuarioEstaAutenticado() {
    return this.estaAutenticado;
  }
}
