import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { ServicesComponent } from './components/services/services.component';

import { MaterialModule } from './../material/material.module'

import { AdminRoutingModule } from './admin-routing.module';
import { GalleryComponent } from './components/gallery/gallery.component'
@NgModule({
  declarations: [
    NavbarComponent,
    ScheduleComponent,
    ServicesComponent,
    GalleryComponent
  ],
  imports: [
    AdminRoutingModule,
    MaterialModule,
    CommonModule
  ]
})
export class AdminModule { }
