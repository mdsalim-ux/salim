import { Component } from '@angular/core';
import { RouteConfigLoadEnd, RouteConfigLoadStart, Router } from '@angular/router';
import { LoaderService } from 'src/app/comman/loader/loader.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public router: Router, public LoaderService: LoaderService) {
    router.events.subscribe((event: any) => {
      if (event instanceof RouteConfigLoadStart) {
        this.LoaderService.show();
      }
      else if (event instanceof RouteConfigLoadEnd) {
        this.LoaderService.hide();
      }
    })
  }
  TabIndex: any;
  event: any;
  selectedTabValue(event: any) {
    console.log(event);
    this.TabIndex = event.index;
    console.log(this.TabIndex, 'Index')
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
}
