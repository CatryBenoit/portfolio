import { Component } from '@angular/core';
import { FigureComponent } from '../../components/figure/figure.component'
//import { Figureomponent } from ''
@Component({
  selector: 'app-competence1',
  standalone: true, // si c’est aussi un standalone
  imports: [FigureComponent],
  templateUrl: './competence1.component.html',
  styleUrl: './competence1.component.scss'
})
export class Competence1Component {}