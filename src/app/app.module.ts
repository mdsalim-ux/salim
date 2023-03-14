import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
import { TranslationModule } from './common/translation/translation.module';
import { APP_BASE_HREF, DatePipe, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientJsonpModule, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AlertboxModule } from './common/dialogbox/alertbox/alertbox.module';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlertboxComponent } from './common/dialogbox/alertbox/alertbox.component';
import { InjectionToken } from '@angular/core';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { UserService } from './common/service/user.service';
import { TokenInterceptor } from './core/token.interceptor';
import { LoaderComponent } from './common/loader/loader/loader.component';
import { LoginComponent } from './login/login/login.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';
import { MainheaderComponent } from './login/mainheader/main.component';
import { FooterComponent } from './modules/footer/footer.component';
import { NgxHideOnScrollModule } from 'ngx-hide-on-scroll';
import { DailogboxComponent } from './common/dialogbox/cruddialogbox/crudOperation.component';
import { AgGridModule } from 'ag-grid-angular';
import { EditAgGridComponent } from './common/edit-ag-grid/edit-ag-grid.component';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { FilterPipe } from './common/pipe/filter.pipe';
import { UniquePipe } from './common/pipe/unique.pipe';
import { OnlineStatusModule } from 'ngx-online-status';
import { OnlineStatusComponent } from './common/online-status/online-status.component';

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
    MainheaderComponent,
    FooterComponent,
    DailogboxComponent,
    EditAgGridComponent,
    FilterPipe,
    UniquePipe,
    OnlineStatusComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientJsonpModule,
    TranslationModule,
    AlertboxModule,
    MatDialogModule,
    ReactiveFormsModule,
    HttpClientModule,
    BreadcrumbModule,
    NgxHideOnScrollModule,
    ToastrModule.forRoot({
    }),
    AgGridModule,
    OnlineStatusModule
  ],
  providers: [UserService,DatePipe,
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }],
  bootstrap: [AppComponent],
  schemas:[]
})
export class AppModule { }
export function TranslateLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, "./assets/i18n/", ".json")
}
