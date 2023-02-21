import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NotificationService } from 'src/app/comman/notification/notification.service';
import { LoaderService } from 'src/app/comman/loader/loader.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainheaderComponent implements OnInit {
  supportedLanguages = ['en', 'hn'];
  dropdownindex: any;
  constructor(public loaderService: LoaderService, private _notification: NotificationService, private formBuilder: FormBuilder, private router: Router, public translate: TranslateService) {
    translate.setDefaultLang('en');
  }


  ngOnInit(): void {

  }
  onDropdownChange(event: any) {
    for (let i = 0; i < event.currentTarget.length; i++) {
      this.dropdownindex = event.currentTarget;
      if (this.dropdownindex.selectedIndex == 0 || this.dropdownindex.selectedIndex == 1) {
        this._notification.success(this.loaderService.getTranslatedLanguages('Language_Change'), '');
        break;
      }
    }
  }
}