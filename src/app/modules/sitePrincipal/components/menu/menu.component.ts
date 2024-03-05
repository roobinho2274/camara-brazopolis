import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

/**
 * @title Menu positioning
 */
@Component({
  selector: 'menu-position-example',
  templateUrl: 'menu.component.html',
  standalone: true,
  styleUrl: './menu.component.scss',
  imports: [CommonModule, RouterLink, RouterLinkActive],
})
export class MenuPositionExample {

  public menuItens = signal([
    {
      nameItem: 'História',
      route: '/historia'
    },
    {
      nameItem: 'Notícias',
      route: '/noticias'
    },
    {
      nameItem: 'Vereadores',
      route:'/vereadores'
    },
    {
      nameItem: 'Licitações',
      route: '/licitacoes'
    },
    {
      nameItem: 'Arquivos',
      route: '/arquivos'
    },

  ]);
}