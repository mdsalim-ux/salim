import { Component } from '@angular/core';
import { RouteConfigLoadEnd, RouteConfigLoadStart, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LoaderService } from 'src/app/comman/loader/loader.service';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  supportedLanguages = ['en', 'hn'];
  dropdownindex: any;
  constructor(public dialog: MatDialog, public router: Router, private location: Location, public LoaderService: LoaderService, public translate: TranslateService) {
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
        let input = { 'title': 'Info', message: [`Are you sure you want to change default languague to other languague`] }
        this.LoaderService.AlertDialogBox(input, '460px').subscribe((data: any) => {
          if (data) {
            return
          }
        })
        break;
      }
    }
  }
  onShareClick(event:any){
    let input = { 'title': 'Info', message: [`Share working functionalty will come soon`] }
    this.LoaderService.AlertDialogBox(input, '460px').subscribe((data: any) => {
      if (data) {
        return
      }
    })
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
