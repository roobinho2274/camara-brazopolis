import { Component } from '@angular/core';

import { MenuPositionExample } from '@components/menu/menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenuPositionExample],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
