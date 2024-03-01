import { CommonModule} from '@angular/common';
import { Component, signal } from '@angular/core';
import { IComponets } from '../../interfaces/IComponents.interface';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {

  public arrayComponents = signal<IComponets[]>([
    {
      src: '/assets/img/icones/projetos_executivos.png',
      alt: 'Projetos do executivo',
      href: ''
    },
    {
      src: '/assets/img/icones/codigo_de_etica.png',
      alt: 'Codigo de ética',
      href: ''
    },
    {
      src: '/assets/img/icones/decretos.png',
      alt: 'Decretos do legislativo',
      href: ''
    },
    {
      src: '/assets/img/icones/leiorganica.png',
      alt: 'Lei organica',
      href: ''
    },
    {
      src: '/assets/img/icones/transparencia.png',
      alt: 'Transparencia',
      href: ''
    },
    {
      src: '/assets/img/icones/leis_municipais.png',
      alt: 'Leis municipais',
      href: ''
    },
    {
      src: '/assets/img/icones/licitacao.png',
      alt: 'Licitações',
      href: ''
    },
    {
      src: '/assets/img/icones/projetos_legislativo.png',
      alt: 'Projetos do legislativo',
      href: ''
    },
    {
      src: '/assets/img/icones/resolucoes.png',
      alt: 'Resoluções',
      href: ''
    },
  ]);
}
