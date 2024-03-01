import { Component } from '@angular/core';

//Components
import { HeaderComponent } from '@components/header/header.component';
import { CardsComponent } from '@components/cards/cards.component';
import { SessoesComponent } from '@components/sessoes/sessoes.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CardsComponent, SessoesComponent, MatSlideToggleModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent {

}
