import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllpakagesComponent } from './component/allpakages/allpakages.component';
import { LayoutComponent } from './component/layout/layout.component';
import { MainPageComponent } from './component/main-page/main-page.component';
import { SingleComponent } from './component/single/single.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:'', component:LayoutComponent,children:[
    {path:'', component:MainPageComponent},
    {path:'login', component:LoginComponent},
    {path:'allpakages', component:AllpakagesComponent},
    {path:'single/:id', component:SingleComponent},
  ]},
  
 

  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
