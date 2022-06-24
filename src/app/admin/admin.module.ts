import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { CategoryComponent } from './category/category.component';
import { HotelComponent} from './hotel/hotel.component';
import { OrdersComponent } from './orders/orders.component';
import {ApiServiceService}from 'src/app/api-service.service';
import { UpdateComponent } from './update/update.component'
import {CKEditorModule} from 'ngx-ckeditor';
import { UpdateHotelComponent } from './updatehotel/updatehotel.component';
import { FamilyComponent } from './family/family.component';
import { HoneymoonComponent } from './hoeymoon/honeymoon.component';
import { BusinessComponent } from './business/business.component';
import { AdventureComponent } from './adventure/adventure.component';
import { CarComponent } from './car/car.component';
import { UpdatehonemoonComponent } from './updatehonemoon/updatehonemoon.component';
import { UpdatefamilyComponent } from './familyupdate/updatefamily.component';
import { UpdateCarComponent } from './updatecar/updatecar.component';
import { UpdatebusinessComponent } from './businessupdate/updatebusiness.component';
import { UpdateadventureComponent } from './adventureupdate/updateadventure.component';

@NgModule({
  declarations: [AdminComponent, CategoryComponent, HotelComponent, OrdersComponent, UpdateComponent, UpdateHotelComponent, FamilyComponent, HoneymoonComponent, BusinessComponent, AdventureComponent, CarComponent, UpdatehonemoonComponent, UpdatefamilyComponent, UpdateCarComponent, UpdatebusinessComponent, UpdateadventureComponent ],



  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    CKEditorModule
  ],
  providers: [
    ApiServiceService
  ],
})
export class AdminModule { }
