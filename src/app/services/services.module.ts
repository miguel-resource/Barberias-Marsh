import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './components/banner/banner.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { ServicesComponent } from './services/services.component';
import { ServiceRoutingModule } from './services-routing.module'
import { SwiperModule } from "swiper/angular";


@NgModule({
  declarations: [
    ServicesComponent,
    BannerComponent,
    CatalogueComponent,
    ReservationComponent,
  ],
  imports: [
    SwiperModule,
    ServiceRoutingModule,
    CommonModule
  ]
})
export class ServicesModule { }
