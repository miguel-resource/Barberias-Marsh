import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home/home.component';


//COMPONENTS
import { NavbarComponent } from './components/navbar/navbar.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { ServicesComponent } from './components/services/services.component';
import { GalleryComponent } from './../admin/components/gallery/gallery.component'

const routes: Routes = [
  {
      path: '',
      component: NavbarComponent,
      children: [
        {
          path: '',
          component: ScheduleComponent
        },
        {
          path: 'servicios',
          component: ServicesComponent
        },
        {
          path: 'galeria',
          component: GalleryComponent
        }
      ]
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
