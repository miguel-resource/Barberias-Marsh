import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';

import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    BannerComponent
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    BannerComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule
  ]
})
export class SharedModule { }
