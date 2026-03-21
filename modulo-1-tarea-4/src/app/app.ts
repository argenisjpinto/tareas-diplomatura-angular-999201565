import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { StorageService } from './core/services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  standalone: false
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    const lastRoute = this.storageService.getLastRoute();

    if (lastRoute && this.router.url === '/') {
      this.router.navigateByUrl(lastRoute);
    }

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        if (event.urlAfterRedirects !== '/') {
          this.storageService.setLastRoute(event.urlAfterRedirects);
        }
      });
  }
}