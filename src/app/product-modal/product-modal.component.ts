import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.scss']
})
export class ProductModalComponent implements OnInit {
  @Input() product: any;
  @Output() closeModal = new EventEmitter<void>();

  public mainModalImageUrl: string = '';

  ngOnInit(): void {
    if (this.product) {
      this.mainModalImageUrl = this.product.imageUrl;
    }
  }

  setMainModalImage(imageUrl: string): void {
    this.mainModalImageUrl = imageUrl;
  }

  onClose(): void {
    this.closeModal.emit();
  }
}
