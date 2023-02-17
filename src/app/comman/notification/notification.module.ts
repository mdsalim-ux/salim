import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/angular/material/material.module';
import { NotificationComponent } from './notification.component';



@NgModule({
  declarations: [
    NotificationComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})

export class NotificationModule { }
