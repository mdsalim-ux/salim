import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LoaderService } from 'src/app/common/loader/loader.service';
import { NotificationService } from 'src/app/common/notification/notification.service';
import { TranslationModule } from 'src/app/common/translation/translation.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  step = 0;
  liveCounterValue: any;
  educationview:boolean=false;
  personaldetails:boolean=false;
  lang:boolean=false;
  currentDate: any;
  AnimationState: boolean=true;

  constructor(public loader:LoaderService,private _notification:NotificationService,
    public translate:TranslationModule) {
    
  }
  

  ngOnInit(): void {
    
  }

  

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    if (this.step==2){
      this._notification.info(this.translate.getTranslatedLanguages('Thanks_Check'),'')
    }
    this.step++;
  }

  prevStep() {
    this.step--;
  }

}