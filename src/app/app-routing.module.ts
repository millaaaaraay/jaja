import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard'; // Asegúrate de que la ruta sea correcta

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then(m => m.RegistroPageModule)
  },
  {
    path: 'index',
    loadChildren: () => import('./index/index.module').then(m => m.IndexPageModule)
  },
  {
    path: 'remedios',
    loadChildren: () => import('./remedios/remedios.module').then(m => m.RemediosPageModule),
    canActivate: [AuthGuard] // Aplicar el guard aquí
  },
  {
    path: 'remedios-add',
    loadChildren: () => import('./remedios/remedios-add/remedios-add.module').then(m => m.RemediosAddPageModule),
    canActivate: [AuthGuard] // Aplicar el guard aquí
  },
  {
    path: 'remedios-delete',
    loadChildren: () => import('./remedios/remedios-delete/remedios-delete.module').then(m => m.RemediosDeletePageModule),
    canActivate: [AuthGuard] // Aplicar el guard aquí
  },
  {
    path: 'remedios-all',
    loadChildren: () => import('./remedios/remedios-all/remedios-all.module').then(m => m.RemediosAllPageModule),
    canActivate: [AuthGuard] // Aplicar el guard aquí
  },
  {
    path: 'remedios-detail',
    loadChildren: () => import('./remedios/remedios-detail/remedios-detail.module').then(m => m.RemediosDetailPageModule),
    canActivate: [AuthGuard] // Aplicar el guard aquí
  },
  {
    path: 'remedios-edit',
    loadChildren: () => import('./remedios/remedios-edit/remedios-edit.module').then(m => m.RemediosEditPageModule),
    canActivate: [AuthGuard] // Aplicar el guard aquí
  },
  {
    path: 'remedios-list',
    loadChildren: () => import('./remedios/remedios-list/remedios-list.module').then(m => m.RemediosListPageModule),
    canActivate: [AuthGuard] // Aplicar el guard aquí
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
