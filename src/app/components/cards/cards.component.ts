import { Component, ViewChild } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent {
  
  @ViewChild(ModalComponent) modal!: ModalComponent; 
  
  cards = [
    {
      name: 'Comuna 1',
      description:
        '      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores possimus consequatur fugit debitis amet quibusdam, reiciendis beatae commodi hic exercitationem culpa, eum explicabo, placeat expedita animi sit tempore est quas.',
      image: 'assets/images/1.png',
    },
    {
      name: 'Comuna 2',
      description:
        '      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores possimus consequatur fugit debitis amet quibusdam, reiciendis beatae commodi hic exercitationem culpa, eum explicabo, placeat expedita animi sit tempore est quas.',
      image: 'assets/images/2.png',
    },
    {
      name: 'Comuna 3',
      description:
        '      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores possimus consequatur fugit debitis amet quibusdam, reiciendis beatae commodi hic exercitationem culpa, eum explicabo, placeat expedita animi sit tempore est quas.',
      image: 'assets/images/3.png',
    },
    {
      name: 'Comuna 4',
      description:
        '      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores possimus consequatur fugit debitis amet quibusdam, reiciendis beatae commodi hic exercitationem culpa, eum explicabo, placeat expedita animi sit tempore est quas.',
      image: 'assets/images/4.png',
    },
    {
      name: 'Comuna 5',
      description:
        '      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores possimus consequatur fugit debitis amet quibusdam, reiciendis beatae commodi hic exercitationem culpa, eum explicabo, placeat expedita animi sit tempore est quas.',
      image: 'assets/images/5.png',
    },
    {
      name: 'Comuna 6',
      description:
        '      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores possimus consequatur fugit debitis amet quibusdam, reiciendis beatae commodi hic exercitationem culpa, eum explicabo, placeat expedita animi sit tempore est quas.',
      image: 'assets/images/6.png',
    },
    {
      name: 'Comuna 7',
      description:
        '      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores possimus consequatur fugit debitis amet quibusdam, reiciendis beatae commodi hic exercitationem culpa, eum explicabo, placeat expedita animi sit tempore est quas.',
      image: 'assets/images/7.png',
    },
    {
      name: 'Comuna 8',
      description:
        '      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores possimus consequatur fugit debitis amet quibusdam, reiciendis beatae commodi hic exercitationem culpa, eum explicabo, placeat expedita animi sit tempore est quas.',
      image: 'assets/images/8.png',
    },
  ];

  selection: any;

  showModal = false;

  selectCard(index: number): void {
    this.selection = this.cards[index];
    this.showModal = true;
    this.modal.openModal();
    console.log(this.selection);
  }

  closeModal(): void {
    this.showModal = false;
  }
}
