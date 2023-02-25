import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/comman/loader/loader.service';
import { NotificationService } from 'src/app/comman/notification/notification.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public loader:LoaderService,private _notification:NotificationService) { }

  ngOnInit(): void {
  }
  downloadCV() {
    let link = document.createElement('a');
    link.setAttribute('type', 'hidden');
    link.href = 'assets/resume/MdSalimAlamResume.pdf';
    link.download = "Md_Salim_Alam_CV";
    document.body.appendChild(link);
    link.click();
    link.remove();
    this._notification.success(this.loader.getTranslatedLanguages('Downloaded_Resume'), '');
  }

  LinkedinProfile() {
    let url = "https://in.linkedin.com/in/md-salim-alam-0bb365b9"
    window.open(url, '_blank');
  }
}