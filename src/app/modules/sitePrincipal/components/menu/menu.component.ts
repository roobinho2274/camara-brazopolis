import { Component, signal } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

/**
 * @title Menu positioning
 */
@Component({
  selector: 'menu-position-example',
  templateUrl: 'menu.component.html',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule, CommonModule],
})
export class MenuPositionExample {

  public menuItens = signal([
    {
      nameItem: 'Histórico',
      subItem: [],
    },
    {
      nameItem: 'Notícias',
      subItem: [],
    },
    {
      nameItem: 'Vereadores',
      subItem: [{}],
    },
    {
      nameItem: 'Licitações',
      subItem: [],
    },

  ]);
}