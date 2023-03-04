import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/enviroments/enviroment.prod';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  timeinterval: any;
  minutes: number = 0;
  constructor(public router: Router) {

  }
  title = 'profile';
  ngOnInit(): void {
    let parsedUrl = new URL(window.location.href);

    if (!parsedUrl.href.includes('main'))
      this.router.navigate(['/']);

    this.timeinterval = setInterval(() => {
      this.minutes++;
      if (this.minutes == environment.timout) {
        this.router.navigate(['/logout/1']);
      }
    }, 60000)
  }
}
