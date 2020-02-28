import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { LoginComponent } from './login/login.component';
import { FormComponent } from './form/form.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, LoginComponent, FormComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
