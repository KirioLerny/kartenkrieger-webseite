import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @Output() showShop = new EventEmitter<void>();
  cardmarketUrl = 'https://www.cardmarket.com/de/Magic/Users/Systemone';

  onShowShopClick() {
    this.showShop.emit();
  }
}
