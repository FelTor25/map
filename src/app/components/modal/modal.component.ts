import { Component, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() selection: any;
  @Output() closeModal = new EventEmitter();

  constructor(private modalShare: NgbModal) {}

  ngOnInit(): void {
    
  }

  /** Instancia de la modal compartir */
  @ViewChild('share') share!: ElementRef;

  /** Almacena la referencia de la modal */
  modalRef!: NgbModalRef;

  openModal(): void {
    this.modalRef = this.modalShare.open(
      this.share,
      { windowClass: 'share', centered: true }
    );
  }
}
