import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, filter, finalize, switchMap, take, tap } from 'rxjs/operators'
import { UserService } from 'src/app/comman/service/user.service';
import { LoaderService } from 'src/app/comman/loader/loader.service';
import { NotificationService } from 'src/app/comman/notification/notification.service';
import { IRefreshToken } from 'src/app/comman/interface/user';

import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  service_count = 0;
  constructor(private router: Router, private loaderService:LoaderService, private _userService: UserService, private _notificationService: NotificationService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.service_count++;
    this.loaderService.show();
    request = this.addToken(request);
    return next.handle(request).pipe(
      finalize(() => {
        this.service_count--;
        if (this.service_count === 0) {
          this.loaderService.hide();
        }
      }),
      catchError((error: any) => {
        if (error instanceof HttpErrorResponse && error.status === 401) {
          return this.handle401Error(request, next);
        }
        const errorMessage = this.setError(error);
        this.loaderService.hide();

        if (errorMessage == "Session Expired") {
          this._notificationService.info(errorMessage, '');
        }
        else {
          this._notificationService.error(errorMessage, '');
        }

        return throwError(errorMessage)
      })
    );
  }

  setError(error: HttpErrorResponse): string {
    let errorMessage = "Unknow error occured";
    if (error.error instanceof ErrorEvent) {
      // client side error
      errorMessage = error.error.message;
    }
    else {
      // server side error
      if (error.status === 401) {
        errorMessage = error.statusText;
      }
      else if (error.error.ErrorMessage && error.status !== 0) {
        errorMessage = error.error.ErrorMessage;
      }
      else {
        errorMessage = "Backend server is Down";
      }
      if (error.error.ErrorMessage == "IDX10223: Lifetime validation failed. The token is expired. ValidTo: 'System.DateTime', Current time: 'System.DateTime'.")
        //  || error.error.ErrorMessage == "IDX10000: The parameter 'token' cannot be a 'null' or an empty object. (Parameter 'token')") {
        {
        errorMessage = "Session Expired";
        if (localStorage.getItem('user'))
          localStorage.removeItem('user')
        this.router.navigate(['/login']);
      }
    }
    return errorMessage;
  }
  private addToken(request: HttpRequest<any>) {

    let token = this._userService.getJwtToken()
    let headers = request.headers
      .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT')
      .set('Cache-Control', 'no-cache')
      .set('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization,Auth')
      .set('Pragma', 'no-cache')

    if (token) {
      headers = request.headers
        .set('Authorization', `Bearer ${token}`);
    }

    let cloneReq;
    if(request.url.includes('header/api')){
       cloneReq = request.clone({  withCredentials: true }); 
    }
    cloneReq = request.clone({ headers });


    return cloneReq

  }
  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);
      let refToken = new IRefreshToken();
      refToken.jwtToken = this._userService.getJwtToken();
      refToken.refreshToken = this._userService.getrefreshToken();
      return this._userService.refreshToken(refToken).pipe(
        switchMap((token: any) => {
          this.isRefreshing = false;
          let user = this._userService.getUser();
          user.token = token.jwtToken
          user.refreshToken = token.refreshToken
          localStorage.setItem('user', JSON.stringify(user));
          this.refreshTokenSubject.next(user.token);
          return next.handle(this.addToken(request));
        }));
    }
    else {
      return this.refreshTokenSubject.pipe(
        filter(token => token != null),
        take(1),
        switchMap(jwt => {
          return next.handle(this.addToken(request));
        })
      );
    }

  }
}