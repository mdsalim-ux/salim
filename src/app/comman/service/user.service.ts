import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/enviroment/enviroment.prod';
import { ILogin, IRefreshToken, IRegister } from 'src/app/comman/interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user : any;
  constructor(private http:HttpClient) { }
  login(user:ILogin){
    return this.http.post<any>(environment.apiurl + 'User/login',user);
  }
  register(user:IRegister){
    return this.http.post<any>(environment.apiurl + 'User/register',user);
  }
  refreshToken(user:IRefreshToken){
    return this.http.post<any>(environment.apiurl + 'User/refToken',user);
  }
  /*storeJwtToken(jwtToken: string) {
    localStorage.setItem("JWT",jwtToken);
  }*/

  getJwtToken(){
    let user = localStorage.getItem('user') as string;
    this.user = JSON.parse(user);
    return this.user !=null?this.user.token:null;
  }
  getrefreshToken(){
    let user = localStorage.getItem('user') as string;
    this.user = JSON.parse(user);
    return this.user !=null?this.user.refreshToken:null;
  }
  getRoleName(){
    let user = localStorage.getItem('user') as string;
    this.user = JSON.parse(user);
    return this.user !=null?this.user.roleName:null;
  }
  getUser(){
    let user = localStorage.getItem('user') as string;
    this.user = JSON.parse(user);
    return this.user !=null?this.user:null;
  }
  removeJwtToken(){
    localStorage.removeItem('user');
  }
  storeJwtToken(jwtToken:string){
    localStorage.setItem("JWT_TOKEN",jwtToken)
  }
}