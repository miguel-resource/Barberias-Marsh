import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { SwiperModule } from "swiper/angular";

import { AboutRoutingModule } from './about-routing.module';
import { UbicationComponent } from './components/ubication/ubication.component';
import { ObjectiveComponent } from './components/objective/objective.component';
import { SlidePicturesComponent } from './components/slide-pictures/slide-pictures.component';

@NgModule({
  declarations: [
    AboutComponent,
    UbicationComponent,
    ObjectiveComponent,
    SlidePicturesComponent,    
  ],
  imports: [
    AboutRoutingModule,
    SwiperModule,
    CommonModule
  ]
})
export class AboutModule { }
