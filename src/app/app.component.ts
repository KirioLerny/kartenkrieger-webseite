import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'kartenkrieger-webseite';
  isHome = true;
  showHeader = false;
  cardmarketUrl = 'https://www.cardmarket.com/de/Magic/Users/Systemone';

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isHome = event.url === '/' || event.url === '';
        this.showHeader = event.url === '/galerie';
      }
    });
  }
}
