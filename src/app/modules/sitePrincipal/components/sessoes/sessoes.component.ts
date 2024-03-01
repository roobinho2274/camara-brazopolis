import { Component } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-sessoes',
  standalone: true,
  imports: [MatExpansionModule],
  templateUrl: './sessoes.component.html',
  styleUrl: './sessoes.component.scss'
})
export class SessoesComponent {
  panelOpenState = false;
}
