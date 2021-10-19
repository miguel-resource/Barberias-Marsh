import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './components/banner/banner.component';
import { MaterialModule } from './../material/material.module';

import { HomeRoutingModule } from './home-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component'
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './components/footer/footer.component'

@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    HomeRoutingModule,
    MaterialModule,
    CommonModule
  ]
})
export class HomeModule { }