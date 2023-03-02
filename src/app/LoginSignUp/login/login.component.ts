import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { NotificationService } from '../../comman/notification/notification.service';
import { LoaderService } from '../../comman/loader/loader.service';
import { UserdataService } from 'src/app/comman/service/userdata.service';
import { EncrDecrService } from 'src/app/comman/encr-decr-service.service';
import { MatDialogRef } from '@angular/material/dialog';
import { HeaderComponent } from 'src/app/modules/header/header.component';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm!: FormGroup;
    dropdownindex: any;
    otp: any;
    twilioClient: any;
    loginIsInvalid: boolean = false;
    LoginData: any;
    constructor(public _DataService: UserdataService, public LoaderService: LoaderService,
        private _notification: NotificationService,private dialogRef:MatDialogRef<HeaderComponent>, private EncrDecr: EncrDecrService, private formBuilder: FormBuilder, private router: Router, public translate: TranslateService) {
    }

    ngOnInit(): void {
        // this._DataService.userlogin().subscribe
        //     (res => { this.LoginData = res })
        this.loginForm = this.formBuilder.group({
            // phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^[0-9]\d*$/)]],
            password: ['', [Validators.required, Validators.minLength(1), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{10,}')]],
            username: ['', [Validators.required, Validators.pattern("^[a-zA-Z\\s]*$")]],
            //otp: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(8), Validators.pattern(/^[0-6]\d*$/)]],
        });
    }
    generateOTP() {
        const randomNum = Math.floor(Math.random() * 1000000);
        this.otp = ('000000' + randomNum).slice(-6);

    }

    loginValid() {
        if (this.loginForm.value.phone.length == 9 && this.loginForm.value.username.length != 0 || this.loginForm.valid) {
            this.loginIsInvalid = true;
        }
    }
    login() {
        this.loginForm.markAllAsTouched();
        if (this.loginForm.valid) {
         this.loginForm.reset()
         this.dialogRef.close(true);
        this.router.navigate(['/work'])
        this._notification.success(this.LoaderService.getTranslatedLanguages('Login_Success'), '');
        }

    }
    // signUp(){
    //     this.dialogRef.
    // }
    // login() {
    //     if (this.loginForm.valid) {
    //         let res = this.LoginData;
    //         for (let i = 0; i < res.length; i++) {
    //             var encrypted = this.EncrDecr.set('123456$#@$^@1ERF', res[i].phone);
    //             res[i].phone = encrypted,
    //                 this.loginForm.value.phone = encrypted,
    //                 res[i].username = res[i].username
    //         }
    //         const users = res.find((a: any) => {
    //             return a.username === this.loginForm.value.username
    //         });
    //         if (users) {
    //             if (this.loginForm.valid) {
    //                 this.loginForm.reset()
    //                 this.router.navigate(['/work'])
    //                 this._notification.success(this.LoaderService.getTranslatedLanguages('Login_Success'), '');
    //                 let input = { 'title': this.LoaderService.getTranslatedLanguages('Info'), message: [(this.LoaderService.getTranslatedLanguages('Welcome')), ''] }
    //                 this.LoaderService.AlertDialogBox(input, '480px').subscribe((data: any) => {
    //                     return

    //                 })
    //             }

    //         }
    //     }
    // }
    // userNameExist() {
    //     let usernameexists = this.loginForm.controls['username'].value;
    //     let loginData = this.LoginData;
    //     this.loginIsInvalid = false;
    //     if (loginData != undefined) {
    //         for (let i = 0; i < loginData.length; i++) {
    //             if (loginData[i].username.trim() != usernameexists && usernameexists != '') {
    //                 this.loginIsInvalid = true;
    //                 this.loginForm.controls['username'].setErrors({ 'incorrect': true });
    //                 return;
    //             }
    //         }
    //     }
    // }
}