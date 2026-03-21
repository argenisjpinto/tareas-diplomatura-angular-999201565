import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css'],
  standalone: false
})
export class ProductoDetalleComponent implements OnInit {
  productoId: number = 0;

  productos = [
    { id: 1, nombre: 'Notebook', precio: 1200, descripcion: 'Notebook para trabajo y estudio.' },
    { id: 2, nombre: 'Mouse', precio: 25, descripcion: 'Mouse inalámbrico ergonómico.' },
    { id: 3, nombre: 'Teclado', precio: 80, descripcion: 'Teclado mecánico retroiluminado.' }
  ];

  productoSeleccionado: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.productoId = Number(this.route.snapshot.paramMap.get('id'));
    this.productoSeleccionado = this.productos.find(p => p.id === this.productoId);
  }
}