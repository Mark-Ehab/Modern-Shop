import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Home } from './components/home/home';

export const routes: Routes = [
    {path:"",redirectTo:"home",pathMatch:"full"},
    {path:"home",component:Home,title:"Home"},
    {path:"about",loadComponent:()=>import("./components/about/about").then((component)=>component.About),title:"About"},
    {path:"products",loadComponent:()=>import("./components/products/products").then((component)=>component.Products),title:"Products"},
    {path:"**",loadComponent:()=>import("./components/nopagefound/nopagefound").then((component)=>component.Nopagefound),title:"404 - Page Not Found"},
];
