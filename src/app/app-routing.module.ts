import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'form', component: FormComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {

}