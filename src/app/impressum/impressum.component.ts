import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-impressum',
  standalone: true,
  imports: [CommonModule, MatButtonModule, RouterModule],
  template: `
    <div class="container mx-auto py-10 px-4 bg-gray-50 rounded-lg shadow-md">
      <h1 class="text-4xl font-bold mb-6 text-gray-800 border-b pb-2">Impressum</h1>

      <div class="text-gray-700 space-y-4">
        <div>
          <p class="font-semibold">Angaben gemäß § 5 DDG:</p>
          <p>Seven Karcher</p>
          <p>August-Bebel-Str. 69</p>
          <p>76187 Karlsruhe</p>
        </div>

        <div>
          <p class="font-semibold">Kontakt:</p>
          <p>Telefon: +49 176 47229853</p>
          <p>E-Mail: sven.karcher&#64;kabelbw.de</p>
        </div>

        <div>
          <p class="font-semibold">Umsatzsteuer-ID:</p>
          <p>[Falls zutreffend]</p>
        </div>

        <div>
          <p class="font-semibold">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</p>
          <p>Sven Karcher<br>August-Bebel-Str. 69<br>76187 Karlsruhe</p>
        </div>
      </div>

      <div class="mt-8">
        <button mat-raised-button color="primary" (click)="goToHome()">
          Zurück zur Startseite
        </button>
      </div>
    </div>
  `,
  styleUrls: []
})
export class ImpressumComponent {

  constructor(private router: Router) {}

  goToHome(): void {
    this.router.navigate(['/']);
  }
}
