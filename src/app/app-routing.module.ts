import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { IntroComponent } from './modules/intro/intro.component';
import { WorkComponent } from './modules/work/work.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "intro", component: IntroComponent },
  { path: "work", component: WorkComponent },
  { path: 'home', loadChildren: () => import('src/app/modules/home/home.module').then(m => m.HomeModule) },
  { path: 'intro', loadChildren: () => import('src/app/modules/intro/intro.module').then(m => m.IntroModule) },
  { path: 'work', loadChildren: () => import('src/app/modules/work/work.module').then(m => m.WorkModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
