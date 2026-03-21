import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'usuarios',
    loadChildren: () =>
      import('./usuarios/usuarios.module').then(m => m.UsuariosModule),
  },
  {
    path: 'productos',
    loadChildren: () =>
      import('./productos/productos.module').then(m => m.ProductosModule),
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}