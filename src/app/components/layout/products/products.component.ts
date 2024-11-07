import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { MainLayoutComponent } from "../main-layout/main-layout.component";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [HeaderComponent, MainLayoutComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

}
