import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(private _http: HttpClient) { }
  addUserData(data: any): Observable<any> {
    return this._http.post('http://localhost:3000/Users', data)
  }
  userlogin(): Observable<any> {
    return this._http.get('http://localhost:3000/Users')
  }
  AgGirdData(data: any): Observable<any> {
    return this._http.post('http://localhost:3000/AgGirdData', data)
  }
  getAgGirdData(): Observable<any> {
    return this._http.get('http://localhost:3000/AgGirdData')
  }
  getTechnology(): Observable<any> {
    return this._http.get('http://localhost:3000/Technology')
  }
  deleteGridData(id:any): Observable<any> {
    return this._http.delete(`http://localhost:3000/AgGirdData/${id}`)

  }
  
}
