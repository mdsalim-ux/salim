import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { NotificationService } from '../../comman/notification/notification.service';
import { LoaderService } from '../../comman/loader/loader.service';
import { UserdataService } from 'src/app/comman/service/userdata.service';

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
    loginIsInvalid: boolean=true;
    constructor(public _DataService: UserdataService, public LoaderService: LoaderService,
        private _notification: NotificationService, private formBuilder: FormBuilder, private router: Router, public translate: TranslateService) {
    }

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^[0-9]\d*$/)]],
           // password: ['', [Validators.required, Validators.minLength(1), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{10,}')]],
            username: ['', [Validators.required, Validators.min(1), Validators.pattern("[a-zA-Z]*")]],
            //otp: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(8), Validators.pattern(/^[0-6]\d*$/)]],
        });

    }
    generateOTP() {
        const randomNum = Math.floor(Math.random() * 1000000);
        this.otp = ('000000' + randomNum).slice(-6);

    }
    loginValid(){
        if (this.loginForm.value.phone.length==9 && this.loginForm.value.username.length!=0 ||this.loginForm.valid) {
            this.loginIsInvalid=true;
        }
    }
    
    login() {
        if(this.loginForm.valid){
        this._DataService.addUserData(this.loginForm.value).subscribe
            (res => {});
                // const users = res.find((a: any) => {
                //     return a.username === this.loginForm.value.username && a.password === this.loginForm.value.password
                // });
              //  if (users) {
                    if (this.loginForm.valid) {
                            this.loginForm.reset()
                            this.router.navigate(['/work'])
                            this._notification.success(this.LoaderService.getTranslatedLanguages('Login_Success'), '');
                            let input = { 'title': this.LoaderService.getTranslatedLanguages('Info'), message: [(this.LoaderService.getTranslatedLanguages('Welcome')), ''] }
                            this.LoaderService.AlertDialogBox(input, '480px').subscribe((data: any) => {
                                return
                    
                            })
                    }
                   
                    // if(this.loginForm.invalid) {
                    //     this.router.navigate(['/login'])
                    //     let input = { 'title': 'Info', message: [(this.LoaderService.getTranslatedLanguages('Invalid_Users')), ''] }
                    //     this.LoaderService.AlertDialogBox(input, '480px').subscribe((data: any) => {
                    //         return
                
                    //     })
                
                    // }
             //   }

               
            }
 
    }
    

}