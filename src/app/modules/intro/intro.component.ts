import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/common/notification/notification.service';
import { TranslationModule } from 'src/app/common/translation/translation.module';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent {
  readMoreC1:boolean=false;
  readMoreC2:boolean=false
  readMoreC3:boolean=false
  step = 0;
constructor(public router: Router,public translate:TranslationModule,public _notification:NotificationService){

}

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    if (this.step==2){
      this._notification.info(this.translate.getTranslatedLanguages('Thanks_Checks'),'')
    }
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
