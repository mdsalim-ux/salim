import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';
import { HeaderComponent } from './modules/header/header.component';
import { HomeComponent } from './modules/home/home.component';
import { IntroComponent } from './modules/intro/intro.component';
import { WorkComponent } from './modules/work/work.component';
import { MainheaderComponent } from './login/mainheader/main.component';
import { FooterComponent } from './modules/footer/footer.component';
import { DailogboxComponent } from './common/dialogbox/cruddialogbox/crudOperation.component';

const routes: Routes = [
  { path: '', redirectTo: '/header', pathMatch: 'full' },
  { path: 'main', component: MainheaderComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: "header", component: HeaderComponent},
  { path: "home", component: HomeComponent },
  { path: "intro", component: IntroComponent },
  { path: "work", component: WorkComponent },
  { path: "footer", component: FooterComponent },
  { path: "crud", component: DailogboxComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
