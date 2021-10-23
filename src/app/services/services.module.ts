import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './components/banner/banner.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { ServicesComponent } from './services/services.component';
import { ServiceRoutingModule } from './services-routing.module'


@NgModule({
  declarations: [
    ServicesComponent,
    BannerComponent,
    NavbarComponent,
    FooterComponent,
    CatalogueComponent,
    ReservationComponent,
  ],
  imports: [
    ServiceRoutingModule,
    CommonModule
  ]
})
export class ServicesModule { }