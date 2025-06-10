import { Component, Input } from '@angular/core';
import { ImageModalComponent } from './image-modal.component'; // adapte le chemin
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-figure',
  standalone: true,
  imports: [NgIf, ImageModalComponent],
  templateUrl: './figure.component.html',
  styleUrls: ['./figure.component.scss']
})
export class FigureComponent {
  @Input() imageUrl: string = '';
  @Input() legend: string = '';
  @Input() aligne: 'left' | 'right' = 'left';

  showModal = false;

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
