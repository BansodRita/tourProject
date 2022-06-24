import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CategoryComponent } from './category/category.component';
import { FamilyComponent } from './family/family.component';
import { HoneymoonComponent } from './hoeymoon/honeymoon.component';
import { OrdersComponent } from './orders/orders.component';
import { HotelComponent } from './hotel/hotel.component';
import { UpdateComponent } from './update/update.component';
import { UpdateHotelComponent } from './updatehotel/updatehotel.component';
import { CarComponent } from './car/car.component';
import { BusinessComponent } from './business/business.component';
import { AdventureComponent } from './adventure/adventure.component';
import { UpdatefamilyComponent } from './familyupdate/updatefamily.component';
import { UpdateCarComponent } from './updatecar/updatecar.component';
import { UpdatehonemoonComponent } from './updatehonemoon/updatehonemoon.component';
import { UpdatebusinessComponent } from './businessupdate/updatebusiness.component';
import { UpdateadventureComponent } from './adventureupdate/updateadventure.component';

const lazyroutes: Routes = [
  { path: '', component: AdminComponent,
children:[
  { path: '', component:OrdersComponent },
  { path: 'category', component:CategoryComponent },
  { path: 'packages', component:HotelComponent },
  { path: 'orders', component:OrdersComponent },
  {path:'update', component:UpdateComponent},
  {path:'updatep/:id', component:UpdateHotelComponent},
  {path:'updatefamily/:id', component:UpdatefamilyComponent},
  {path:'updatehotel/:id', component:UpdateHotelComponent},
  {path:'updatecar/:id', component:UpdateCarComponent},
  {path:'updatehoneymoon/:id', component:UpdatehonemoonComponent},
  {path:'business/:id', component:UpdatebusinessComponent},
  {path:'adv/:id', component:UpdateadventureComponent},
  {path:'family', component:FamilyComponent},
  {path:'honeymoon', component:HoneymoonComponent},
  {path:'hotel', component:HotelComponent},
  {path:'car', component:CarComponent},
  {path:'business', component:BusinessComponent},
  {path:'adventure', component:AdventureComponent},
]

}
];

@NgModule({
  imports: [RouterModule.forChild(lazyroutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
