import { Component, OnInit } from '@angular/core';
import { ProductosService, Producto } from '../../services/products.service';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DescuentoPipe } from '../../pipes/descuento.pipe';

@Component({
  selector: 'app-lista-productos',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, DescuentoPipe],
  templateUrl: './lista-productos.html',
  styleUrl: './lista-productos.css',
})
export class ListaProductos implements OnInit {
  form: FormGroup;
  productos: Producto[] = [];
  mensajeError = '';

  constructor( private productosService: ProductosService, private fb: FormBuilder ) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      description: ['', Validators.required],
      image: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    console.log('ngOnInit de ListaProductos ejecutado');
    this.cargarProductos();
    
  }

  cargarProductos(): void {
    console.log('Entró a cargarProductos');
    this.productosService.getProductos().subscribe({
      next: (data) => {
        console.log('Productos recibidos:', data);
        this.productos = data.map((producto) => ({
          ...producto,
          fechaAlta: new Date().toISOString()
        }));
        console.log('Productos finales:', this.productos);
      },
      error: (error) => {
        console.error('Error en suscripción:', error);
        this.mensajeError = error.message;
      }
    });
  }

  agregarProducto(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const nuevoProducto = {
      title: this.form.value.title,
      price: Number(this.form.value.price),
      description: this.form.value.description,
      category: 'general',
      image: this.form.value.image,
      fechaAlta: new Date().toISOString()
    };

    this.productosService.addProducto(nuevoProducto).subscribe({
      next: (productoCreado) => {
        const productoFinal: Producto = {
          ...productoCreado,
          fechaAlta: nuevoProducto.fechaAlta
        };

        this.productos = [productoFinal, ...this.productos];
        this.form.reset();
      },
      error: (error) => {
        this.mensajeError = error.message;
      }
    });
  }

  eliminarProducto(id: number): void {
    this.productosService.deleteProducto(id).subscribe({
      next: () => {
        this.productos = this.productos.filter((producto) => producto.id !== id);
      },
      error: (error) => {
        this.mensajeError = error.message;
      }
    });
  }
}