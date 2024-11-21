import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit{
  constructor(private _ActivatedRoute:ActivatedRoute){
  }
  ngOnInit(): void {
    this._ActivatedRoute.params.subscribe({
      next: (res)=>{
        console.log(res['id']);
      }
    })
  }
}
