import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapsComponent } from './maps/maps.component';
import { HomeComponent } from './home/home.component';
import { PropertiesComponent } from './properties/properties.component';
import { MortgagecalculatorComponent } from './mortgagecalculator/mortgagecalculator.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { EnquiriesComponent } from './enquiries/enquiries.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'properties', component: PropertiesComponent },
  { path: 'maps', component: MapsComponent },
  { path: 'mortgagecalculator', component: MortgagecalculatorComponent },
  { path: 'enquiries', component: EnquiriesComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
