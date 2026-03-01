import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Registro } from './components/registro/registro';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, Registro],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}