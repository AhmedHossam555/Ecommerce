import { Component } from '@angular/core';
import { ScrollDirective } from '../../../shared/directives/scroll.directive';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ScrollDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
