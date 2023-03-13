import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { AlertboxComponent } from '../dialogbox/alertbox/alertbox.component';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  data = { message: "" }
  public isLoading = new BehaviorSubject(false);
  public isLoadingMessage = new BehaviorSubject({});
  isLoadingMessageObs = this.isLoadingMessage.asObservable()

  constructor(public dialog:MatDialog) {
    this.isLoadingMessage.next(this.data);
  }
  show() {
    this.isLoading.next(true);
  }
  hide() {
    this.isLoading.next(false);
  }
  setMessage(key: string) {
    this.data["message"] = key
    this.isLoadingMessage.next(this.data);
  }
 
  
}