import { Component } from '@angular/core';
import { RouteConfigLoadEnd, RouteConfigLoadStart, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LoaderService } from 'src/app/comman/loader/loader.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  supportedLanguages = ['en', 'hn'];
  constructor(public router: Router, private location: Location, public LoaderService: LoaderService, public translate: TranslateService) {
    router.events.subscribe((event: any) => {
      if (event instanceof RouteConfigLoadStart) {
        this.LoaderService.show();
      }
      else if (event instanceof RouteConfigLoadEnd) {
        this.LoaderService.hide();
      }
    })
    translate.setDefaultLang('en');
    console.log(translate.langs, "Languages")
  }
  ngOnInit(): void {
    this.location.go('/');
    this.selectedTabValue(event);
  }
  TabIndex: any;
  event: any;
  // tab change calling component
  selectedTabValue(event: any) {
    console.log(event, 'index');
    // on refresh tab change issue
    if (event == undefined) {
      this.router.navigate(['/home'])
      return
    }
    this.TabIndex = event.index;
    if (this.TabIndex == 0) {
      this.router.navigate(['/home'])
    }
    if (this.TabIndex == 1) {
      this.router.navigate(['/intro'])
    }
    if (this.TabIndex == 2) {
      this.router.navigate(['/work'])
    }
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
