import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';  // Importamos Storage

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private storage: Storage) {
    this.initStorage();  // Llamamos a la función para inicializar Storage
  }

  async initStorage() {
    await this.storage.create();  // Inicializa el Storage
  }
}
