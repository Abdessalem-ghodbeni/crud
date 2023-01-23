import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { LoginComponent } from './login/login.component';
import { AddEventComponent } from './add-event/add-event.component';
import { RouterModule } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RegisterComponent } from './register/register.component';
import { ListeOfuserComponent } from './liste-ofuser/liste-ofuser.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { AddUserComponent } from './add-user/add-user.component';
//import { DashbordModule } from './component/dashbord/dashbord.module';
//import { DashbordComponent } from './dashbord/dashbord.component';
@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    LoginComponent,
    AddEventComponent,
    RegisterComponent,
    ListeOfuserComponent,
    HomePageComponent,
    HeaderComponent,
    AddUserComponent,
    //DashbordComponent
  ],
  imports: [
    BrowserModule, MatPaginatorModule, MatTableModule, ReactiveFormsModule, HttpClientModule, RouterModule, MatSnackBarModule, MatProgressSpinnerModule,
    AppRoutingModule, MatSortModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule,
    BrowserAnimationsModule, MatToolbarModule, MatIconModule, MatButtonModule, MatDialogModule, MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
