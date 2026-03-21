import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProductosRoutingModule } from './productos-routing.module';
import { ProductosListaComponent } from './pages/productos-lista/productos-lista.component';
import { ProductoDetalleComponent } from './pages/producto-detalle/producto-detalle.component';

@NgModule({
  declarations: [ProductosListaComponent, ProductoDetalleComponent],
  imports: [CommonModule, RouterModule, ProductosRoutingModule],
})
export class ProductosModule {}
