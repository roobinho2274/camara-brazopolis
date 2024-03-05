import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [],
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class NoticiasComponent {

}
