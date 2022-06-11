import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashbordComponent } from './component/dashbord/dashbord.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { RequestsManagementComponent } from './component/requests-management/requests-management.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './component/signin/signin.component';
import { SectorsComponent } from './component/sectors/sectors.component';
import { DoctorComponent } from './component/doctor/doctor.component';
import { HospitalComponent } from './component/hospital/hospital.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    DashbordComponent,
    NavbarComponent,
    RequestsManagementComponent,
    SignupComponent,
    SigninComponent,
    SectorsComponent,
    DoctorComponent,
    HospitalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
