import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  data = { message: "" }
  public isLoading = new BehaviorSubject(false);
  public isLoadingMessage = new BehaviorSubject({});
  isLoadingMessageObs = this.isLoadingMessage.asObservable()

  constructor(private TranslatedLanguages:TranslateService) {
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
}