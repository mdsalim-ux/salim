import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { IntroComponent } from './modules/intro/intro.component';
import { WorkComponent } from './modules/work/work.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "intro", component: IntroComponent },
  { path: "work", component: WorkComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
