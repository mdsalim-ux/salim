import { Component } from '@angular/core';
import { RouteConfigLoadEnd, RouteConfigLoadStart, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LoaderService } from 'src/app/comman/loader/loader.service';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { NotificationService } from 'src/app/comman/notification/notification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  linkToShare = 'https://mdsalimportfolio.github.io/portfolio.github.io/';

  supportedLanguages = ['en', 'hn'];
  dropdownindex: any;
  constructor(public dialog: MatDialog, public router: Router, private location: Location,
    public LoaderService: LoaderService, public translate: TranslateService, private _notification: NotificationService) {
    router.events.subscribe((event: any) => {
      if (event instanceof RouteConfigLoadStart) {
        this.LoaderService.show();
      }
      else if (event instanceof RouteConfigLoadEnd) {
        this.LoaderService.hide();
      }
    })
    translate.setDefaultLang('en');
  }
  ngOnInit(): void {
    this.location.go('/');
    this.selectedTabValue(event);
  }
  TabIndex: any;
  event: any;
  // tab change calling component
  selectedTabValue(event: any) {
    // on refresh tab change issue
    if (event == undefined) {
      this.router.navigate(['/home'])
      return
    }
    this.TabIndex = event.index;
    if (this.TabIndex == 0) {
      this._notification.success(this.LoaderService.getTranslatedLanguages('Welcome'), '');
      this.router.navigate(['/home'])
    }
    if (this.TabIndex == 1) {
      this.router.navigate(['/intro'])
    }
    if (this.TabIndex == 2) {
      this.router.navigate(['/work'])
    }
  }
  //on change of language dropdown 
  onDropdownChange(event: any) {
    for (let i = 0; i < event.currentTarget.length; i++) {
      this.dropdownindex = event.currentTarget;
      if (this.dropdownindex.selectedIndex == 0 || this.dropdownindex.selectedIndex == 1) {
        this._notification.success(this.LoaderService.getTranslatedLanguages('Language_Change'), '');
        break;
      }
    }
  }
  onShareClick(event: any) {
    const url = `https://web.whatsapp.com/?url=${encodeURIComponent(this.linkToShare)}`;
    window.open(url, '_blank');
    this._notification.success(this.LoaderService.getTranslatedLanguages('Link_Share_WhatsApp'), '');
  }

  //On click download cv 
  downloadCV() {
    let link = document.createElement('a');
    link.setAttribute('type', 'hidden');
    link.href = 'assets/resume/MdSalimAlamResume.pdf';
    link.download = "Md_Salim_Alam_CV";
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
  //on click linkdin profile
  LinkedinProfile() {
    let url = "https://in.linkedin.com/in/md-salim-alam-0bb365b9"
    window.open(url, '_blank');
  }
}
