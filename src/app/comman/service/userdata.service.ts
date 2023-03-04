import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroment/enviroment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(private _http: HttpClient) { 
    var currentURL=document.location.hostname
    if(currentURL=="mdsalimprofile.web.app"){
      environment.apiUrl=environment.apiUrl
      environment.hostUrl=environment.hostUrl
    }
  }

 
  addUserData(data: any): Observable<any> {
    const options = { withCredentials: true };
    return this._http.post<any>(environment.apiUrl+'/Users', data,options)
  }
  userlogin(): Observable<any> {
    const options = { withCredentials: true };
    return this._http.get<any>(environment.apiUrl+'/Users',options)
  }
  AgGirdData(data: any): Observable<any> {
    const options = { withCredentials: true };
    return this._http.post<any>(environment.apiUrl+'/AgGirdData', data,options)
  }
  getAgGirdData(): Observable<any> {
    const options = { withCredentials: true };
    return this._http.get<any>(environment.apiUrl+'/AgGirdData',options)
  }
  getTechnology(): Observable<any> {
    const options = { withCredentials: true };
    return this._http.get<any>(environment.apiUrl+'/Technology',options)
  }
  deleteGridData(id:any): Observable<any> {
    const options = { withCredentials: true };
    return this._http.delete<any>(environment.apiUrl+`/AgGirdData/${id}`,options)
  }
}
