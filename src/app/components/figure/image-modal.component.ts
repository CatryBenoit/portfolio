import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-image-modal',
  standalone: true,
  imports: [NgIf],
  template: `
    <div class="modal-overlay" (click)="close()">
      <div class="modal-content" (click)="$event.stopPropagation()">
        <button class="close-btn" (click)="close()">✕</button>
        <img [src]="imageUrl" [alt]="alt" />
        <figcaption *ngIf="caption">{{ caption }}</figcaption>
      </div>
    </div>
  `,
  styles: [`
    .modal-overlay {
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      background-color: rgba(0,0,0,0.8);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 9999;
    }
    .modal-content {
      position: relative;
      background: white;
      padding: 1rem;
      border-radius: 10px;
      max-width: 90vw;
      max-height: 90vh;
      overflow: auto;
      text-align: center;
    }
    img {
      max-width: 100%;
      max-height: 80vh;
      border-radius: 8px;
    }
    .close-btn {
      position: absolute;
      top: 8px;
      right: 8px;
      background: transparent;
      border: none;
      font-size: 1.8rem;
      cursor: pointer;
      line-height: 1;
      color: #333;
      font-weight: bold;
    }
  `]
})
export class ImageModalComponent {
  @Input() imageUrl!: string;
  @Input() alt: string = '';
  @Input() caption?: string;
  @Output() closeModal = new EventEmitter<void>();

  close() {
    this.closeModal.emit();
  }
}
