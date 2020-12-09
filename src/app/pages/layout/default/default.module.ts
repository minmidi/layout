import { ProductComponent } from './../../module/product/product.component';
import { ShareModule } from './../../share/share.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './../../module/home/home.component';
import { DefaultComponent } from './default.component';


@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ShareModule
  ]
})
export class DefaultModule { }
