import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

export interface Producto {
  id: number;
  title: string;
  price: number;
  description: string;
  category?: string;
  image?: string;
  fechaAlta: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private apiUrl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}

  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl).pipe(
      catchError((error) => {
        console.error('Error al obtener productos:', error);
        return throwError(() => new Error('No se pudieron obtener los productos.'));
      })
    );
  }

  addProducto(producto: Omit<Producto, 'id'>): Observable<Producto> {
    return this.http.post<Producto>(this.apiUrl, producto).pipe(
      catchError((error) => {
        console.error('Error al agregar producto:', error);
        return throwError(() => new Error('No se pudo agregar el producto.'));
      })
    );
  }

  deleteProducto(id: number): Observable<unknown> {
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(
      catchError((error) => {
        console.error('Error al eliminar producto:', error);
        return throwError(() => new Error('No se pudo eliminar el producto.'));
      })
    );
  }
}