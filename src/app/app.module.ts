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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslationModule } from './comman/translation/translation.module';
import { APP_BASE_HREF, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AlertboxModule } from './comman/dialogbox/alertbox/alertbox.module';
import { MatDialogModule } from '@angular/material/dialog';
import { AlertboxComponent } from './comman/dialogbox/alertbox/alertbox.component';
import { InjectionToken } from '@angular/core';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { NotificationModule } from './comman/notification/notification.module';
import { UserService } from './comman/service/user.service';
import { TokenInterceptor } from './core/interceptor/token.interceptor';
import { LoaderComponent } from './comman/loader/loader/loader.component';
import { LoginComponent } from './LoginSignUp/login/login.component';
import { SignUpComponent } from './LoginSignUp/sign-up/sign-up.component';
import { MainheaderComponent } from './LoginSignUp/mainheader/mainheader/main.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json")
}
export const TOAST_CONFIG = new InjectionToken<ToastrService>('toast-config');

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IntroComponent,
    WorkComponent,
    HeaderComponent,
    AlertboxComponent,
    LoaderComponent,
    LoginComponent,
    SignUpComponent,
    MainheaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    TranslationModule,
    AlertboxModule,
    MatDialogModule,
    NotificationModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
    }),

  ],
  providers: [UserService, { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function TranslateLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, "./assets/i18n/", ".json")
}
