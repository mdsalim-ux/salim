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
import { APP_BASE_HREF, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { AlertboxModule } from './comman/dialogbox/alertbox/alertbox.module';
import {MatDialogModule} from '@angular/material/dialog';
import { AlertboxComponent } from './comman/dialogbox/alertbox/alertbox.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IntroComponent,
    WorkComponent,
    HeaderComponent,
    AlertboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    TranslationModule,
    AlertboxModule,
    MatDialogModule
  ],
  providers: [ { provide: LocationStrategy, useClass: PathLocationStrategy },
  { provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json")
}
