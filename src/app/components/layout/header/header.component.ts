import { Component } from '@angular/core';
import { ScrollDirective } from '../../../shared/directives/scroll.directive';
import { OverlayDirective } from '../../../shared/directives/overlay.directive';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ScrollDirective,OverlayDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  
 
}
