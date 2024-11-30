import { Component } from '@angular/core';
import { OrderComponent } from "./order/order.component";

@Component({
  selector: 'app-check-out',
  standalone: true,
  imports: [OrderComponent],
  templateUrl: './check-out.component.html',
  styleUrl: './check-out.component.scss'
})
export class CheckOutComponent {

}
