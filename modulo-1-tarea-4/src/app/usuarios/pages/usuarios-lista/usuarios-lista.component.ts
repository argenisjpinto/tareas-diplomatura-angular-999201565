import { Component } from '@angular/core';

@Component({
  selector: 'app-usuarios-lista',
  templateUrl: './usuarios-lista.component.html',
  styleUrls: ['./usuarios-lista.component.css'],
  standalone: false
})
export class UsuariosListaComponent {
  usuarios = [
    { id: 1, nombre: 'Ana' },
    { id: 2, nombre: 'Luis' },
    { id: 3, nombre: 'Carla' }
  ];
}