import { Routes } from '@angular/router';
import { authGuard } from './shared/guard/auth.guard';

export const routes: Routes = [
    {path:'',redirectTo:'products',pathMatch:'full'},
    {path:'products',loadComponent:()=>import('../app/components/layout/all-products/all-products.component').then((c)=>c.AllProductsComponent),title:'products'},
    {path: 'products/:id',loadComponent:()=>import('../app/components/layout/product-details/product-details.component').then((c)=>c.ProductDetailsComponent),title:'product-details'},
    {path:'user/profile',loadComponent:()=>import('../app/components/layout/user/profile/profile.component').then((c)=> c.ProfileComponent),canActivate:[authGuard],title:'profile'},
    {path:'user/wishlist',loadComponent:()=>import('../app/components/layout/user/wishlist/wishlist.component').then((c)=> c.WishlistComponent),canActivate:[authGuard],title:'wishlist'},
    {path:'login',loadComponent:()=>import('../app/components/auth/login/login.component').then((c)=>c.LoginComponent),title:'Login'},
    {path:'register',loadComponent:()=>import('../app/components/auth/register/register.component').then((c)=>c.RegisterComponent),title:'register'},
    {path:'checkout',loadComponent: ()=> import('../app/components/layout/check-out/check-out.component').then((c)=>c.CheckOutComponent),title:'checkout'},
    {path: 'checkout/success',loadComponent: ()=> import('../app/components/layout/check-out/success/success.component').then((c)=> c.SuccessComponent),title:'success'}
];
