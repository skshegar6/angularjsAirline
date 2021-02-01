import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppDashBoardComponent } from './app-dash-board/app-dash-board.component';
import { LoginComponent } from './login/login.component';
import { StaffDashBoardComponent } from './staff-dash-board/staff-dash-board.component';
import { SampleComponent } from './sample/sample.component';
import { PassengersComponent } from './passengers/passengers.component';
import { PassengerFormComponent } from './passenger-form/passenger-form.component';


const routes: Routes = [
{path: 'login', component: LoginComponent},
{path: 'staff', component: StaffDashBoardComponent}, 
{path: 'staff/passanger/:flightId', component:PassengersComponent},
{path: 'staff/passanger/add/:flightId', component:PassengerFormComponent},
{path: 'sample', component: SampleComponent},
{path: '', component: AppDashBoardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
