import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './LoginSignUp/login/login.component';
import { SignUpComponent } from './LoginSignUp/sign-up/sign-up.component';
import { HeaderComponent } from './modules/header/header.component';
import { HomeComponent } from './modules/home/home.component';
import { IntroComponent } from './modules/intro/intro.component';
import { WorkComponent } from './modules/work/work.component';
import { MainheaderComponent } from './LoginSignUp/mainheader/mainheader/main.component';

const routes: Routes = [
  { path: '', redirectTo: '/header', pathMatch: 'full' },
  { path: 'main', component: MainheaderComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: "header", component: HeaderComponent },
  { path: "home", component: HomeComponent },
  { path: "intro", component: IntroComponent },
  { path: "work", component: WorkComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
