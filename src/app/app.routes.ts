import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'',redirectTo:'products',pathMatch:'full'},
    {path:'products',loadComponent:()=>import('../app/components/layout/all-products/all-products.component').then((c)=>c.AllProductsComponent),title:'products'},
    {path: 'products/:id',loadComponent:()=>import('../app/components/layout/product-details/product-details.component').then((c)=>c.ProductDetailsComponent),title:'product-details'},
    {path:'login',loadComponent:()=>import('../app/components/auth/login/login.component').then((c)=>c.LoginComponent),title:'Login'},
    {path:'register',loadComponent:()=>import('../app/components/auth/register/register.component').then((c)=>c.RegisterComponent),title:'register'}
    

];
