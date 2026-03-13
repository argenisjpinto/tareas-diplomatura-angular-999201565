import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { ListaProductos } from './components/lista-productos/lista-productos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, Footer, ListaProductos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('modulo-1-tarea-3');
}