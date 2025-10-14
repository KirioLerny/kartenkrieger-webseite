import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-impressum',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './impressum.component.html', // Zurück zu templateUrl geändert
  styleUrls: ['./impressum.component.scss']
})
export class ImpressumComponent {

  constructor(private router: Router) {}

  goToHome(): void {
    this.router.navigate(['/']);
  }
}
