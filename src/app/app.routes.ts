import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'',redirectTo:'products',pathMatch:'full'},
    {path:'products',loadComponent:()=>import('../app/components/layout/all-products/all-products.component').then((c)=>c.AllProductsComponent),title:'products'},
];
