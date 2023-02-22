import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { NotificationService } from '../../comman/notification/notification.service';
import { LoaderService } from '../../comman/loader/loader.service';
import { UserdataService } from 'src/app/comman/service/userdata.service';
import { AlertboxComponent } from 'src/app/comman/dialogbox/alertbox/alertbox.component';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm!: FormGroup;
    dropdownindex: any;
    constructor(public _DataService: UserdataService, public LoaderService: LoaderService,
        private _notification: NotificationService, private formBuilder: FormBuilder, private router: Router, public translate: TranslateService) {
    }

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            password: ['', [Validators.required, Validators.minLength(1), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{10,}')]],
            username: ['', [Validators.required, Validators.min(1), Validators.pattern("[a-zA-Z]*")]]
        });

    }

    login() {
        let Id: any;
        if (this.loginForm.valid) {
            this._DataService.userlogin().subscribe
                (res => {
                    const users = res.find((a: any) => {
                        return a.username === this.loginForm.value.username && a.password === this.loginForm.value.password
                    });
                    if (users) {
                        this.router.navigate(['/header'])
                        this._notification.success(this.LoaderService.getTranslatedLanguages('Login_Success'), '');
                    }
                    else {
                        this._notification.warning(this.LoaderService.getTranslatedLanguages('Incorrect_Login'), '');
                        return
                    }
                },
                    err => {
                        alert("went wrong")
                    }
                );
        }
    }

}