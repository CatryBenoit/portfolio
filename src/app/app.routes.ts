import { Routes } from '@angular/router';
import { Competence1Component } from './pages/competence1/competence1.component';
import { Competence2Component } from './pages/competence2/competence2.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'competence1', component: Competence1Component },
  { path: 'competence2', component: Competence2Component },
  { path: '**', redirectTo: '' }
];