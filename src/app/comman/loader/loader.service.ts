import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  data={message:""}
  
  // isLoading = new Subject<boolean>();
  public isLoading = new BehaviorSubject(false);

  public isLoadingMessage = new BehaviorSubject({});
  isLoadingMessageObs = this.isLoadingMessage.asObservable()

  constructor() { 
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