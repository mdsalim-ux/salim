import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IntroComponent } from './modules/intro/intro.component';
import { WorkComponent } from './modules/work/work.component';
import { HeaderComponent } from './modules/header/header.component'
import { MaterialModule } from './angular/material/material.module';
import { FormsModule } from '@angular/forms';
import { TranslationModule } from './comman/translation/translation.module';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IntroComponent,
    WorkComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    TranslationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
