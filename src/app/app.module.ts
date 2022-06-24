import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { MainPageComponent } from './component/main-page/main-page.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { LayoutComponent } from './component/layout/layout.component';
import { ApiServiceService } from './api-service.service';
import {CKEditorModule} from 'ngx-ckeditor';
import { HotelComponent } from './component/hotel/hotel.component';
import { SingleComponent } from './component/single_hotel/single.component';

import { CarPackageComponent } from './component/car/carpackage.component';
import { familyComponent } from './component/family/family.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainPageComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    HotelComponent,
    SingleComponent,
    familyComponent,
    CarPackageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CKEditorModule
  ],
  providers: [ApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
