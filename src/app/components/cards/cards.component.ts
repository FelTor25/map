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
        'La comuna #1 esta compuesta por los siguientes barrios: Nueva granada, Rondinela, Galán, Chapinerito Alto y Bajo, Los Cerezos, La Campiña, Catalana, El Poblado, Doce de Octubre, Santa Josefa, El Recuerdo, Manaure, Panorama, El Triunfo, Caudal, El Praado, Virrey, La Grama, El Rosal, Emporio y La Victoria',
      image: 'assets/images/1.png',
    },
    {
      name: 'Comuna 2',
      description:
        'La comuna #2 esta compuesta por los siguientes barrios: Nueva Andalucía, Centro, la Salle, las Colinas,Azotea, San Fernando, Barzal Alto y Bajo, Maizaro, Villaflores, Siete de Agosto,Buque, Trapiche, Villa María, Villacentro, Camoa, Balatá, Los Pinos, Bonanza,Villa Codem, San José, Balcones de Toledo, Sansoucí',
      image: 'assets/images/2.png',
    },
    {
      name: 'Comuna 3',
      description:
        'La comuna #3 esta compuesta por los siguientes barrios: Brisas del Guatiquía, Las Delicias, Villa Julia, San isidro, Santa Inés, El Porvenir, San Gregorio, Gaitán, Veinte de Julio, Las Ferias, Antonio Ricaute, Industrial, La Vainilla, Santander, La Lambada.',
      image: 'assets/images/3.png',
    },
    {
      name: 'Comuna 4',
      description:
        'La comuna #4 esta compuesta por los siguientes barrios: Villa Suárez, El Paraíso, Florencia, la Ceiba, Jórdan, Santa Helena, El Bambú, Madrigal, La Bastilla, Seis de Abril, Santa Martha, Antonio Villavicencio, Morichal, San Luis, El Recreo, La Desmotadora, Prados De Ciberia, Cedritos, Covisán, Calamar, El Cedral y Villa Fabiola.',
      image: 'assets/images/4.png',
    },
    {
      name: 'Comuna 5',
      description:
        'La comuna #5 esta compuesta por los siguientes barrios: Popular, Dos Mil, Olímpico, Villa Ortíz, Camelias, Cataluña, Bello Horizonte, Nueva Floresta, Estero, Bochica, Macunaima, Ariguaní, Vizcaya,Hacaritama, Villa Melida, Ciudadela San Antonio, Aguas Claras, Danubio, Doña Luz, Remanso, Menegua y Buenos Aires.',
      image: 'assets/images/5.png',
    },
    {
      name: 'Comuna 6',
      description:
        'La comuna #6 esta compuesta por los siguientes barrios: Pastrana, Caney, Simón Bolívar, Macarena, Retiro, Amaral, Canaima, Nuevo Maizaro, Catatumbo, Nogal, San Benito, Guatiquía, Florida, Canta Rana, Nuevo Ricaute, San Francisco, Brisas del Caney y Sausalito.',
      image: 'assets/images/6.png',
    },
    {
      name: 'Comuna 7',
      description:
        'La comuna #7 esta compuesta por los siguientes barrios: Esperanza, Paraíso, cooperativo, Jardín, Cambulos, La Serranía, La Vega, Comuneros, La Alborada, Villa Bolívar, Rosa Blanca, Vila Humberto, Palmar, Los Centauros, La Rosita, Villa Claudia y Sesquicentenario.',
      image: 'assets/images/7.png',
    },
    {
      name: 'Comuna 8',
      description:
        'La comuna #8 esta compuesta por los siguientes barrios: Ariguanery, Porfia, Las Américas, Playa Rica, Catumare, Guatape, Alamos Santa Rosa, Montecarlo, La Rochela, Villa Carola, Villa Lorena, El Refugio, Guaicáramo y San Jorge',
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
