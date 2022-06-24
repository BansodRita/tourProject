import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarPackageComponent } from './component/car/carpackage.component';
import { familyComponent } from './component/family/family.component';
import { HotelComponent } from './component/hotel/hotel.component';
import { LayoutComponent } from './component/layout/layout.component';
import { MainPageComponent } from './component/main-page/main-page.component';
import { SingleFamilyComponent } from './component/single_family/single_family.component';
import { SingleComponent } from './component/single_hotel/single.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:'', component:LayoutComponent,children:[
    {path:'', component:MainPageComponent},
    {path:'login', component:LoginComponent},
    {path:'hotel', component:HotelComponent},
    {path:'family', component:familyComponent},
    {path:'carpackage', component:CarPackageComponent},
    {path:'single/:id', component:SingleComponent},
    {path:'single_family/:id', component:SingleFamilyComponent},
  ]},
  
 

  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
