import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';  // Importamos Ionic Storage

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private storage: Storage) {
    this.init();  // Inicializamos Storage
  }

  // Método de inicialización del Storage
  async init() {
    await this.storage.create();
  }

  // Método para verificar si el usuario está autenticado
  async isAuthenticated(): Promise<boolean> {
    const isAuthenticated = await this.storage.get('isAuthenticated');
    return !!isAuthenticated;  // Retorna true si está autenticado
  }

  // Método para autenticarse 
  async login(credentials: { email: string, password: string }): Promise<boolean> {
    // Aquí puedes verificar las credenciales y establecer una flag en storage
    if (credentials.email === 'benja@gmail.com' && credentials.password === '112233') {
      await this.storage.set('isAuthenticated', true);
      return true;
    }
    return false;
  }

  // Método para cerrar sesión
  async logout(): Promise<void> {
    await this.storage.remove('isAuthenticated');
  }
}


