import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { DatenschutzComponent } from './datenschutz/datenschutz.component';
import { FarbpaletteComponent } from './farbpalette/farbpalette.component';
import { FaqComponent } from './faq/faq.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'galerie', component: ShowcaseComponent },
  { path: 'farbpalette', component: FarbpaletteComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: 'datenschutz', component: DatenschutzComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
