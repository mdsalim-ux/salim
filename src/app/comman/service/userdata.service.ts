import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/enviroments/enviroment.prod';
import { AgGirdData } from '../interface/user';
import { loginData } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(private _http: HttpClient) { 

  }
  

  data=new AgGirdData();
  login=new loginData();
  getAgGirdData()
  {
    return of(this.data.AgGirdData)
  }
  getLoginData()
  {
    return of(this.login.LoginData)
  }
  deleteGridData(id : any){
    this.data.AgGirdData=this.data.AgGirdData.filter((x:any)=>{ return x['id'] !== id});
    return of(true);
  }
  AgGirdData(data: any): Observable<any> {
    return of(this.data.AgGirdData,data)

  }
  addUserData(data: any): Observable<any> {
    const options = { withCredentials: true };
    return this._http.post<any>(environment.apiUrl+'/Users', data,options)
  }
  userlogin(): Observable<any> {
    const options = { withCredentials: true };
    return this._http.get<any>(environment.apiUrl+'/Users',options)
  }
  // AgGirdData(data: any): Observable<any> {
  //   const options = { withCredentials: true };
  //   return this._http.post<any>(environment.apiUrl+'/AgGirdData', data,options)
  // }
  // getAgGirdData(): Observable<any> {
  //   const options = { withCredentials: true };
  //   return this._http.get<any>(environment.apiUrl+'/AgGirdData',options)
  // }
  getTechnology(): Observable<any> {
    const options = { withCredentials: true };
    return this._http.get<any>(environment.apiUrl+'/Technology',options)
  }
  // deleteGridData(id:any): Observable<any> {
  //   const options = { withCredentials: true };
  //   return this._http.delete<any>(environment.apiUrl+`/AgGirdData/${id}`,options)
  // }
}
