import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";


//Components
import  { NavbarComponent } from './shared/navbar/navbar.component'
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes:Routes = [
  //USER INTERFACE
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule{}