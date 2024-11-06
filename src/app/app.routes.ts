import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'',redirectTo:'products',pathMatch:'full'},
    {path:'products',loadComponent:()=>import('../app/components/layout/products/products.component').then((c)=>c.ProductsComponent),title:'products'},
];
