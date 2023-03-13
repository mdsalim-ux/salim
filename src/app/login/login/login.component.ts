import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { NotificationService } from '../../common/notification/notification.service';
import { LoaderService } from '../../common/loader/loader.service';
import { UserdataService } from 'src/app/common/service/userdata.service';
import { EncrDecrService } from 'src/app/common/encr-decr-service.service';
import { MatDialogRef } from '@angular/material/dialog';
import { HeaderComponent } from 'src/app/modules/header/header.component';
import { TranslationModule } from 'src/app/common/translation/translation.module';

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
        private _notification: NotificationService, private dialogRef: MatDialogRef<HeaderComponent>,
         private EncrDecr: EncrDecrService, private formBuilder: FormBuilder, 
         private router: Router, public translate:TranslationModule) {
    }

    ngOnInit(): void {
        this._DataService.getLoginData().subscribe
            (res => { this.LoginData = res })
        this.loginForm = this.formBuilder.group({
            phone: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
            username: ['', [Validators.required, Validators.pattern("^[a-zA-Z\\s]*$")]],
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
            let res = this.LoginData;
            for (let i = 0; i < res.length; i++) {
                // var encrypted = this.EncrDecr.set('123456$#@$^@1ERF', res[i].phone);
                // res[i].phone = encrypted,
                //     this.loginForm.value.phone = encrypted,
                res[i].username = res[i].username
            }
            const users = res.find((a: any) => {
                return a.username === this.loginForm.value.username
            });
            if (users) {
                if (this.loginForm.valid) {
                    this.dialogRef.close(true);
                    this.loginForm.reset()
                    this.router.navigate(['/main'])
                    let input = { 'title': this.translate.getTranslatedLanguages('Info'), message: [(this.translate.getTranslatedLanguages('Welcome')), ''] }
                    this.LoaderService.AlertDialogBox(input, '480px').subscribe((data: any) => {
                        return

                    })
                    this._notification.info('','Scroll down to see the all functionalty ')
                }
            }
        }
    }
    userNameExist() {
        let usernameexists = this.loginForm.controls['username'].value;
        let phone = this.loginForm.controls['phone'].value;
        let loginData = this.LoginData;
        this.loginIsInvalid = false;
        if (loginData != undefined) {
            for (let i = 0; i < loginData.length; i++) {
                if ((loginData[i].username.trim() != usernameexists) && usernameexists != "" && (loginData[i].phone != phone)) {
                    this.loginIsInvalid = true;
                    this.loginForm.controls['username'].setErrors({ 'incorrect': true });
                    break;
                }
                else {
                    this.loginIsInvalid = false;
                    break;
                }
            }
        }
    }
}