import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowcaseComponent } from './showcase/showcase.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ShowcaseComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'kartenkrieger-webseite';
  shopVisible = false;

  showShopView() {
    this.shopVisible = true;
  }

  showHomeView() {
    this.shopVisible = false;
  }
}
