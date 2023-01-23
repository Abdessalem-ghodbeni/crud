import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddEventComponent } from './add-event/add-event.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ListeOfuserComponent } from './liste-ofuser/liste-ofuser.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  //{ path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'addevent', component: AddEventComponent },
  //{ path: 'addevent', loadChildren: () => import('./dashbord/dashbord.module').then(x => x.DashbordModule) },
  // { path: '**', redirectTo: 'login', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent }, { path: 'userliste', component: ListeOfuserComponent }
  //{ path: 'addevent', component: AddEventComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
