import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ShowcaseComponent} from './showcase/showcase.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ShowcaseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'kartenkrieger-webseite';
}
