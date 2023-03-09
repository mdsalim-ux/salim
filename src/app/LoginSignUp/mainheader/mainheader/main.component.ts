import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NotificationService } from 'src/app/comman/notification/notification.service';
import { LoaderService } from 'src/app/comman/loader/loader.service';
import { MaterialModule } from 'src/app/angular/material/material.module';
import { SignUpComponent } from '../../sign-up/sign-up.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainheaderComponent implements OnInit {
  supportedLanguages = ['en', 'hn','ur'];
  dropdownindex: any;
  isExpanded:boolean=false;
  numberInput:boolean=false;
  decimalInput:boolean=false;
  CopyPasteInput:boolean=false;

  constructor(public loaderService: LoaderService, public dialog: MatDialog,public mat:MaterialModule,private _notification: NotificationService, private formBuilder: FormBuilder, private router: Router, public translate: TranslateService) {
    translate.setDefaultLang('en');
  }


  ngOnInit(): void {

  }
  onDropdownChange(event: any) {
    for (let i = 0; i < event.currentTarget.length; i++) {
      this.dropdownindex = event.currentTarget;
      if (this.dropdownindex.selectedIndex == 0 || this.dropdownindex.selectedIndex == 1 || this.dropdownindex.selectedIndex == 2) {
        this._notification.success(this.loaderService.getTranslatedLanguages('Language_Change'), '');
        break;
      }
    }
  }

  openDialogSignUp() {
    const dialogRef = this.dialog.open(SignUpComponent,{
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  decimalFilter(event: any) {
    let reg: RegExp = new RegExp(/^\d{1,3}(\.$|\.\d{1,2}$|$)/);
    let input: Array<string> = ['Backspace', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight', 'Del', 'Delete'];
      let value = event.target.value;
      if (input.indexOf(event.key) !== -1) {
        return;
      }
    let current: string = value;
    const position = event.target.selectionStart;
    const positionEnd = event.target.selectionEnd;
    if(current.length >= 3 && position == 0 && positionEnd >= 3){
       current = '';
    }
    const next: string = [current.slice(0, position), event.key == 'Decimal' ? '.' : event.key, current.slice(position)].join('');
      if (next && !String(next).match(reg)) {
       event.preventDefault();  
      }
    }
  numberOnly(event: any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

  specialChar(event: any) {
    let char = event.charCode;
    if (char == 42 || char == 58 || char == 34 || char == 60 || char == 62 || char == 63 || char == 92 || char == 124 || char == 47) {
      let msg: string = "";
      event.preventDefault();
      let input = {'title': '', 
      message: [msg.concat('').concat(this.loaderService.getTranslatedLanguages('Special_Char_not_allowed')), msg.concat(' ').concat('*:"<>/?\|')]
      }
      this.loaderService.AlertDialogBox(input, '460px').subscribe((data: any) => {
        return
      })
    }
  }
  copyPaste(event: any) {
    let msg: string = "";
    let regex = /[*:"<>\/?\\|]/g
    var pastedText = event.clipboardData.getData('text');
    if (regex.test(pastedText)) {
      event.preventDefault();
      let input = {
        message: [msg.concat('').concat(this.loaderService.getTranslatedLanguages('Special_Char_not_allowed')), msg.concat(' ').concat('*:"<>/?\|')]
      }
      this.loaderService.AlertDialogBox(input, '460px').subscribe((data: any) => {
        return
      })
    };
  }
}