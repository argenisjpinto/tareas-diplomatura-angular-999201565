import { Component } from '@angular/core';

@Component({
  selector: 'app-productos-lista',
  templateUrl: './productos-lista.component.html',
  styleUrls: ['./productos-lista.component.css'],
  standalone: false
})
export class ProductosListaComponent {
  productos = [
    { id: 1, nombre: 'Notebook', precio: 1200 },
    { id: 2, nombre: 'Mouse', precio: 25 },
    { id: 3, nombre: 'Teclado', precio: 80 }
  ];
}