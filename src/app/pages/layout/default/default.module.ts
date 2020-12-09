import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './../../module/home/home.component';
import { DefaultComponent } from './default.component';


@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class DefaultModule { }
