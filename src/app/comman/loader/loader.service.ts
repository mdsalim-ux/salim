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

  constructor(private TranslatedLanguages:TranslateService,public dialog:MatDialog) {
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
  //get translate the file in typescript
  getTranslatedLanguages(key:string){
    let language=this.TranslatedLanguages.currentLang
    return this.TranslatedLanguages.translations[language][key]
  }
  AlertDialogBox(input: any, width: any): Observable<any> {
    const dialogRef = this.dialog.open(AlertboxComponent, {
      width: width,
      autoFocus: false,
      data: input,
      disableClose: true
    });
    return dialogRef.afterClosed()
  }
}