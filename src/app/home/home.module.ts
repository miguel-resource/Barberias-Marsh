import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../material/material.module';

import { SwiperModule } from "swiper/angular";

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { ServicesSlideComponent } from './components/services-slide/services-slide.component';
import { IntroductionComponent } from './components/introduction/introduction.component'

@NgModule({
  declarations: [
    HomeComponent,
    ServicesSlideComponent,
    IntroductionComponent
  ],
  imports: [
    HomeRoutingModule,
    MaterialModule,
    CommonModule,
    SwiperModule
  ]
})
export class HomeModule { }
