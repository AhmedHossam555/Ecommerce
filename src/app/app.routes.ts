import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'',redirectTo:'products',pathMatch:'full'},
    {path:'products',loadComponent:()=>import('../app/components/layout/all-products/all-products.component').then((c)=>c.AllProductsComponent),title:'products'},
    {path: 'products/:id',loadComponent:()=>import('../app/components/layout/product-details/product-details.component').then((c)=>c.ProductDetailsComponent),title:'product-details'},
    {path:'user/profile',loadComponent:()=>import('../app/components/layout/user/profile/profile.component').then((c)=> c.ProfileComponent),title:'profile'},
    {path:'user/wishlist',loadComponent:()=>import('../app/components/layout/user/wishlist/wishlist.component').then((c)=> c.WishlistComponent),title:'wishlist'},
    {path:'login',loadComponent:()=>import('../app/components/auth/login/login.component').then((c)=>c.LoginComponent),title:'Login'},
    {path:'register',loadComponent:()=>import('../app/components/auth/register/register.component').then((c)=>c.RegisterComponent),title:'register'}
];
