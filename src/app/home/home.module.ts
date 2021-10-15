import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { MaterialModule } from './../material/material.module';


@NgModule({
  declarations: [
    BannerComponent
  ],
  imports: [
    MaterialModule,
    CommonModule
  ]
})
export class HomeModule { }
