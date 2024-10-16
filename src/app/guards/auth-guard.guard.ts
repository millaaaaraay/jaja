import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';  // Ruta corregida a 'auth.service.ts'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  async canActivate(): Promise<boolean> {
    const isAuthenticated = await this.authService.isAuthenticated();  // Verificamos si está autenticado
    if (isAuthenticated) {
      return true;  // Si está autenticado, permite el acceso
    } else {
      this.router.navigate(['/login']);  // Si no está autenticado, redirige al login
      return false;
    }
  }
}
