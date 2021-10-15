import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";


//Components
import  { NavbarComponent } from './shared/navbar/navbar.component'
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes:Routes = [
  //USER INTERFACE
  {
    path: '',
    component: NavbarComponent,
    children: [
      {
        path: '',
        redirectTo: '/inicio',
        pathMatch: 'full'
      },
      {
        path: 'inicio',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'servicios',
        loadChildren: () => import('./services/services.module').then(m => m.ServicesModule)
      },
      {
        path: 'nosotros',
        loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
      },
      {
        path: 'contactos',
        loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
      }
    ]
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }

]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule{}
