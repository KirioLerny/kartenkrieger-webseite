import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { ProductModalComponent } from '../product-modal/product-modal.component';

@Component({
  selector: 'app-showcase',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule
  ],
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent {

  products = [
    {
      name: 'Produktname 1',
      description: 'Eine kurze, coole Beschreibung.',
      imageUrl: 'https://ultimateguard.com/thumbnail/4b/e0/51/1751519288/3D_UGD011616_0001_solo_400x400.webp',
      detailedDescription: 'Dies ist eine viel längere und detailliertere Beschreibung für Produkt 1, die alle wichtigen Features und Vorteile hervorhebt.',
      additionalImages: [
        'https://ultimateguard.com/thumbnail/c3/46/78/1736436771/3D_UGD011465_0001_400x400.webp',
        'https://ultimateguard.com/thumbnail/f3/91/ac/1736436749/3D_UGD011464_0001_400x400.webp',
        'https://ultimateguard.com/thumbnail/d1/1f/f3/1736436705/3D_UGD011462_0001_400x400.webp'
      ]
    },
    {
      name: 'Produktname 2',
      description: 'Auch dieses Produkt ist super.',
      imageUrl: 'https://ultimateguard.com/thumbnail/85/fa/eb/1751519352/3D_UGD011619_0001_solo_400x400.webp',
      detailedDescription: 'Mehr Details zu Produkt 2. Es ist bekannt für seine Langlebigkeit und das stilvolle Design',
      additionalImages: [
        'https://ultimateguard.com/thumbnail/85/fa/eb/1751519352/3D_UGD011619_0001_solo_400x400.webp',
        'https://ultimateguard.com/thumbnail/85/fa/eb/1751519352/3D_UGD011619_0001_solo_400x400.webp'
      ]
    },
    {
      name: 'Produktname 3',
      description: 'Beschreibung für das dritte Produkt.',
      imageUrl: 'https://ultimateguard.com/thumbnail/59/c4/ab/1751519332/3D_UGD011618_0001_solo_400x400.webp',
      detailedDescription: 'Produkt 3 ist die perfekte Wahl für Einsteiger und Profis gleichermaßen. Hier sind einige Bilder:',
      additionalImages: [
        'https://ultimateguard.com/thumbnail/59/c4/ab/1751519332/3D_UGD011618_0001_solo_400x400.webp',
        'https://ultimateguard.com/thumbnail/59/c4/ab/1751519332/3D_UGD011618_0001_solo_400x400.webp'
      ]
    },
    {
      name: 'Produktname 4',
      description: 'Eine kurze, coole Beschreibung.',
      imageUrl: 'https://ultimateguard.com/thumbnail/26/a4/27/1751519309/3D_UGD011617_0001_solo_400x400.webp',
      detailedDescription: 'abcdefjcjökjököjöko öksoökncökonslnc nklsclöknsclöskn',
      additionalImages: [
        'https://ultimateguard.com/thumbnail/26/a4/27/1751519309/3D_UGD011617_0001_solo_400x400.webp',
        'https://ultimateguard.com/thumbnail/26/a4/27/1751519309/3D_UGD011617_0001_solo_400x400.webp'
      ]
    }
    /*
    {
      name: 'Produktname 5',
      description: 'Auch dieses Produkt ist super.',
      imageUrl: 'https://ultimateguard.com/thumbnail/1c/3e/85/1753429620/UGD011639_0001_400x400.webp'
    },
    {
      name: 'Produktname 6',
      description: 'Beschreibung für das dritte Produkt.',
      imageUrl: 'https://ultimateguard.com/thumbnail/51/fa/2a/1753429664/UGD011641_0001_400x400.webp'
    },
    {
      name: 'Produktname 7',
      description: 'Eine kurze, coole Beschreibung.',
      imageUrl: 'https://ultimateguard.com/thumbnail/dc/e0/5b/1753429597/UGD011638_0001_400x400.webp'
    },
    {
      name: 'Produktname 8',
      description: 'Auch dieses Produkt ist super.',
      imageUrl: 'https://ultimateguard.com/thumbnail/1d/98/b3/1753429686/UGD011642_0001_400x400.webp'
    },
    {
      name: 'Produktname 9',
      description: 'Beschreibung für das dritte Produkt.',
      imageUrl: 'https://ultimateguard.com/thumbnail/12/cf/05/1753429642/UGD011640_0001_400x400.webp'
    },
    {
      name: 'Produktname 10',
      description: 'Eine kurze, coole Beschreibung.',
      imageUrl: 'https://ultimateguard.com/thumbnail/c3/46/78/1736436771/3D_UGD011465_0001_400x400.webp'
    },
    {
      name: 'Produktname 11',
      description: 'Auch dieses Produkt ist super.',
      imageUrl: 'https://ultimateguard.com/thumbnail/f3/91/ac/1736436749/3D_UGD011464_0001_400x400.webp'
    },
    {
      name: 'Produktname 12',
      description: 'Beschreibung für das dritte Produkt.',
      imageUrl: 'https://ultimateguard.com/thumbnail/d1/1f/f3/1736436705/3D_UGD011462_0001_400x400.webp'
    },
    {
      name: 'Produktname 13',
      description: 'Beschreibung für das dritte Produkt.',
      imageUrl: 'https://ultimateguard.com/thumbnail/04/8d/f4/1736436594/3D_UGD011457_0001_400x400.webp'
    },
    {
      name: 'Produktname 14',
      description: 'Beschreibung für das dritte Produkt.',
      imageUrl: 'https://ultimateguard.com/thumbnail/fd/3b/1e/1736436617/3D_UGD011458_0001_400x400.webp'
    },
    {
      name: 'Produktname 15',
      description: 'Beschreibung für das dritte Produkt.',
      imageUrl: 'https://ultimateguard.com/thumbnail/d9/1d/27/1736436573/3D_UGD011456_0001_400x400.webp'
    },
    {
      name: 'Produktname 16',
      description: 'Beschreibung für das dritte Produkt.',
      imageUrl: 'https://ultimateguard.com/thumbnail/12/d5/fd/1736436683/3D_UGD011461_0001_400x400.webp'
    },
    {
      name: 'Produktname 17',
      description: 'Beschreibung für das dritte Produkt.',
      imageUrl: 'https://ultimateguard.com/thumbnail/b4/47/ab/1736436662/3D_UGD011460_0001_400x400.webp'
    },
    {
      name: 'Produktname 18',
      description: 'Beschreibung für das dritte Produkt.',
      imageUrl: 'https://ultimateguard.com/thumbnail/fd/d8/0d/1736775412/UGD-011359-266-006-00_b_400x400.webp'
    },
    {
      name: 'Produktname 19',
      description: 'Beschreibung für das dritte Produkt.',
      imageUrl: 'https://ultimateguard.com/thumbnail/4f/56/25/1736436640/3D_UGD011459_0001_400x400.webp'
    },
    {
      name: 'Produktname 20',
      description: 'Beschreibung für das dritte Produkt.',
      imageUrl: 'https://ultimateguard.com/thumbnail/72/2f/7c/1736348095/UGD011507_400x400.webp'
    }
    */
  ];

  whatsappNumber = 4917647229853;
  emailAddress = 'ihre@email.de';

  constructor(private dialog: MatDialog) {}

  showProductModal(product: any): void {
    this.dialog.open(ProductModalComponent, {
      data: { product: product },
      panelClass: 'custom-modal-panel'
    });
  }
}

