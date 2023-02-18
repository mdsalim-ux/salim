import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './modules/home/home.component';
import { IntroComponent } from './modules/intro/intro.component';
import { WorkComponent } from './modules/work/work.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: "home", component: HomeComponent },
  { path: "intro", component: IntroComponent },
  { path: "work", component: WorkComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
