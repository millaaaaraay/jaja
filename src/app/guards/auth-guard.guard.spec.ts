import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { AuthGuard } from './auth-guard.guard';  // Cambia a AuthGuard

describe('AuthGuard', () => {  // Cambia el nombre del describe
  let guard: AuthGuard;
  let routerSpy = { navigate: jasmine.createSpy('navigate') };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        { provide: Router, useValue: routerSpy },
      ]
    });
    guard = TestBed.inject(AuthGuard);  // Inyecta el guard como clase
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();  // Verifica si el guard fue creado correctamente
  });
});
