import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, // Important pour les composants standalone
  imports: [RouterOutlet, RouterModule], // Ajout de RouterModule
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent { // Renommez en AppComponent (convention Angular)
  title = 'portfolio';
}