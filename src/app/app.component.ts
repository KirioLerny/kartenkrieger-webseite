import { Component, HostListener } from '@angular/core';
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
  showContactBox = false;
  isAtFooter = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isHome = event.url === '/' || event.url === '';
        this.showHeader = event.url === '/galerie';
        this.showContactBox = event.url === '/galerie';
        this.isAtFooter = false;
      }
    });
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (!this.showContactBox) return;

    const scrollPosition = window.innerHeight + window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;
    const threshold = 200;

    this.isAtFooter = scrollPosition >= documentHeight - threshold;
  }
}
