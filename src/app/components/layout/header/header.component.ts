import { Component, effect, inject, signal, WritableSignal } from '@angular/core';
import { ScrollDirective } from '../../../shared/directives/scroll.directive';
import { OverlayDirective } from '../../../shared/directives/overlay.directive';
import { CartService } from '../../../shared/services/cart/cart.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ScrollDirective,OverlayDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private _CartService = inject(CartService);
  cartNum: WritableSignal<number> = signal(0);
  ngOnInit() {
    this._CartService.cartNum.subscribe({
      next: (res)=>{
        this.cartNum.set(res);
      }
    })

  
  }
}

