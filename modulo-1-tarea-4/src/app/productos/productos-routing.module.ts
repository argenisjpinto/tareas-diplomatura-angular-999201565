import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosListaComponent } from './pages/productos-lista/productos-lista.component';
import { ProductoDetalleComponent } from './pages/producto-detalle/producto-detalle.component';

const routes: Routes = [
  { path: '', component: ProductosListaComponent },
  { path: ':id', component: ProductoDetalleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductosRoutingModule {}