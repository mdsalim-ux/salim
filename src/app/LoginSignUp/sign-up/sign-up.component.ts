import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LoaderService } from 'src/app/comman/loader/loader.service';
import { NotificationService } from 'src/app/comman/notification/notification.service';
import { UserdataService } from 'src/app/comman/service/userdata.service';
import * as CryptoJS from 'crypto-js';
import { EncrDecrService } from 'src/app/comman/encr-decr-service.service';
import { HeaderComponent } from 'src/app/modules/header/header.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent {
  signForm!: FormGroup;
  DataValid: boolean = false;
  alluserdata: any;
  duplicateName: boolean = false;
  constructor(private formBuilder: FormBuilder, public _DataService: UserdataService,public dialog: MatDialog,
    public loaderService: LoaderService, private _notification: NotificationService, 
    private EncrDecr: EncrDecrService,private router: Router, private dialogRef:MatDialogRef<HeaderComponent>,public translate: TranslateService) {
    translate.setDefaultLang('en');
  }
  ngOnInit(): void {
    this._DataService.getLoginData().subscribe
    (val => {    
      this.alluserdata = val;
    })
    this.signForm = this.formBuilder.group({
      DOB:[''],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      phone: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      password: ['', [Validators.required, Validators.minLength(1), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{10,}')]],
      username: ['', [Validators.required, Validators.pattern("^[a-zA-Z\\s]*$")]],
      confirmpassword: ['', [Validators.required, Validators.minLength(1), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{10,}')]],
    },
      { validators: passwordMatchValidator });
  }

  signUp() {
    this.signForm.markAllAsTouched()
    if (this.signForm.valid) {
      this._notification.success(this.loaderService.getTranslatedLanguages('Account_created'), '');
      this.dialogRef.close(true);
      this.openDialogLogin()
    }
    else if (this.signForm.invalid && this.signForm.value.confirmpassword == '') {
       this.signForm.reset()
      this._notification.warning(this.loaderService.getTranslatedLanguages('Filled_Form_details'), '');
    }
    else if (this.signForm.invalid && this.signForm.value.confirmpassword == null) {
      this.DataValid = true;
      return
    }
  }
  openDialogLogin() {
    const dialogRef = this.dialog.open(LoginComponent,{
      disableClose: true,
      width:"450px"
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }
  duplicateUserName() {
    let duplicateName = this.signForm.controls['username'].value;
    let logindata = this.alluserdata;
    if (logindata != undefined) {
      for (let i = 0; i < logindata.length; i++) {
        if (logindata[i].username == duplicateName && duplicateName !=null) {
          this.duplicateName = true;
          this.signForm.controls['username'].setErrors({ 'incorrect': true });
          break;
        }
        else{
          this.duplicateName = false;
        }
      }
    }
  }
}


export const passwordMatchValidator = (control: FormGroup) => {
  const password = control.get('password')?.value;
  const confirmpassword = control.get('confirmpassword')?.value;

  if (password !== confirmpassword) {
    control.get('confirmPassword')?.setErrors({ passwordMismatch: true });
  } else {
    control.get('confirmpassword')?.setErrors(null);
  }

  return null;
};

