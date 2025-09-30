import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { DatenschutzComponent } from './datenschutz/datenschutz.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'galerie', component: ShowcaseComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: 'datenschutz', component: DatenschutzComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' } // Fallback zur Home
];
