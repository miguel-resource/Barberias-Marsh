import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home/home.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { ScheduleComponent } from './components/schedule/schedule.component';

const routes: Routes = [
  {
      path: '',
      component: NavbarComponent,
  }
];

@NgModule({
  imports: [
      RouterModule.forChild(routes),
  ],
  exports: [
      RouterModule
  ]
})

export class AdminRoutingModule{}
