import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosListaComponent } from './pages/usuarios-lista/usuarios-lista.component';

@NgModule({
  declarations: [UsuariosListaComponent],
  imports: [CommonModule, UsuariosRoutingModule],
})
export class UsuariosModule {}