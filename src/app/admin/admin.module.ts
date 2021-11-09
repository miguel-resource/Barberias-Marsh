import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { ServicesComponent } from './components/services/services.component';



@NgModule({
  declarations: [
  
    NavbarComponent,
       ScheduleComponent,
       ServicesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
