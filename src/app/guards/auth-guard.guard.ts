import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';  // Importamos Storage
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private storage: Storage) { }  // Inyectamos Storage

  async canActivate(): Promise<boolean> {
    const isAuthenticated = await this.storage.get('isAuthenticated');  // Verificamos si existe un token o flag de autenticación
    if (isAuthenticated) {
      return true;  // Si está autenticado, permite el acceso
    } else {
      this.router.navigate(['/login']);  // Si no está autenticado, redirige al login
      return false;
    }
  }
}
