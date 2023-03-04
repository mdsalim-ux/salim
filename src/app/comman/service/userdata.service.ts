import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(private _http: HttpClient) { }
  addUserData(data: any): Observable<any> {
    const options = { withCredentials: true };
    return this._http.post('http://localhost:3000/Users', data,options)
  }
  userlogin(): Observable<any> {
    const options = { withCredentials: true };
    return this._http.get('http://localhost:3000/Users',options)
  }
  AgGirdData(data: any): Observable<any> {
    const options = { withCredentials: true };
    return this._http.post('http://localhost:3000/AgGirdData', data,options)
  }
  getAgGirdData(): Observable<any> {
    const options = { withCredentials: true };
    return this._http.get('http://localhost:3000/AgGirdData',options)
  }
  getTechnology(): Observable<any> {
    const options = { withCredentials: true };
    return this._http.get('http://localhost:3000/Technology',options)
  }
  deleteGridData(id:any): Observable<any> {
    const options = { withCredentials: true };
    return this._http.delete(`http://localhost:3000/AgGirdData/${id}`,options)

  }
  
}
