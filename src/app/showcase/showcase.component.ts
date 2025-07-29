import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-showcase',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent {
  products = [
    {
      name: 'Produktname 1',
      description: 'Eine kurze, coole Beschreibung.',
      imageUrl: 'assets/hr_ugd010692.jpg'
    },
    {
      name: 'Produktname 2',
      description: 'Auch dieses Produkt ist super.',
      imageUrl: 'assets/Ultimate-Guard-Boulder----Deck-Case-100--8984_18.jpg'
    },
    {
      name: 'Produktname 3',
      description: 'Beschreibung für das dritte Produkt.',
      imageUrl: 'assets/Ultimate-Guard-Boulder-Deck-Case-100--SYNERGY-11645_5.jpg'
    },
    {
      name: 'Produktname 4',
      description: 'Eine kurze, coole Beschreibung.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Rx2Y9ifY9TiOI4EQxQqX61YGSky1pqB2cA&s'
    },
    {
      name: 'Produktname 5',
      description: 'Auch dieses Produkt ist super.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyQMHbl56P9hDilqHD9AIte6FozNvNc5_d7g&s'
    },
    {
      name: 'Produktname 6',
      description: 'Beschreibung für das dritte Produkt.',
      imageUrl: 'https://www.worldwidetoys.de/cdn/shop/files/C_temp_ugd011458_x_ugd011458_a_1024x.jpg?v=1726244177'
    },
    {
      name: 'Produktname 7',
      description: 'Eine kurze, coole Beschreibung.',
      imageUrl: 'assets/hr_ugd010692.jpg'
    },
    {
      name: 'Produktname 8',
      description: 'Auch dieses Produkt ist super.',
      imageUrl: 'assets/Ultimate-Guard-Boulder----Deck-Case-100--8984_18.jpg'
    },
    {
      name: 'Produktname 9',
      description: 'Beschreibung für das dritte Produkt.',
      imageUrl: 'assets/Ultimate-Guard-Boulder-Deck-Case-100--SYNERGY-11645_5.jpg'
    },
    {
      name: 'Produktname 10',
      description: 'Eine kurze, coole Beschreibung.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Rx2Y9ifY9TiOI4EQxQqX61YGSky1pqB2cA&s'
    },
    {
      name: 'Produktname 11',
      description: 'Auch dieses Produkt ist super.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyQMHbl56P9hDilqHD9AIte6FozNvNc5_d7g&s'
    },
    {
      name: 'Produktname 12',
      description: 'Beschreibung für das dritte Produkt.',
      imageUrl: 'https://www.worldwidetoys.de/cdn/shop/files/C_temp_ugd011458_x_ugd011458_a_1024x.jpg?v=1726244177'
    }
  ];

  whatsappNumber = 123;
  emailAddress = 'ihre@email.de';
}
