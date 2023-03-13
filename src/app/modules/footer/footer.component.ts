import { Component } from '@angular/core';
import { LoaderService } from 'src/app/common/loader/loader.service';
import { NotificationService } from 'src/app/common/notification/notification.service';
import { TranslationModule } from 'src/app/common/translation/translation.module';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  intropage:boolean=false;
  constructor(public loader:LoaderService,private _notification:NotificationService,private translate:TranslationModule) { }

  getArray(n: number) {
    return new Array(n);
  }

  downloadCV() {
    let link = document.createElement('a');
    link.setAttribute('type', 'hidden');
    link.href = 'assets/resume/MdSalimAlamResume.pdf';
    link.download = "Md_Salim_Alam_CV";
    document.body.appendChild(link);
    link.click();
    link.remove();
    this._notification.success(this.translate.getTranslatedLanguages('Downloaded_Resume'), '');
  }

  LinkedinProfile() {
    let url = "https://in.linkedin.com/in/md-salim-alam-0bb365b9"
    window.open(url, '_blank');
  }
}
