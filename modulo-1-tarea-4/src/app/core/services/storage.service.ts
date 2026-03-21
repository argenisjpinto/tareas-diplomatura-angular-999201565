import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private readonly key = 'ultimaRuta';

  setLastRoute(route: string): void {
    localStorage.setItem(this.key, route);
  }

  getLastRoute(): string | null {
    return null; // Always start at home
    // return localStorage.getItem(this.key);
  }

  clearLastRoute(): void {
    localStorage.removeItem(this.key);
  }
}