import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './component/dashbord/dashbord.component';
import { DoctorComponent } from './component/doctor/doctor.component';
import { HospitalComponent } from './component/hospital/hospital.component';
import { RequestsManagementComponent } from './component/requests-management/requests-management.component';
import { SectorsComponent } from './component/sectors/sectors.component';
import { SigninComponent } from './component/signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:"dashbord",component:DashbordComponent},
  {path:"requests",component:RequestsManagementComponent},
  {path:"sector",component:SectorsComponent},
  {path:"hospital",component:HospitalComponent},
  {path:"doctor",component:DoctorComponent},
  {path:"signup",component:SignupComponent},
  {path:"",component:SigninComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
