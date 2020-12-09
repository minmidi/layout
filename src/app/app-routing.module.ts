import { ProductComponent } from './pages/module/product/product.component';
import { HomeComponent } from './pages/module/home/home.component';
import { DefaultComponent } from './pages/layout/default/default.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'', component: DefaultComponent, children: [
    { path: '', component: HomeComponent },
    { path: 'product', component: ProductComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
