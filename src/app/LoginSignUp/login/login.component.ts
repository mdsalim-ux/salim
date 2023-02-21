import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../comman/service/user.service';
import { TranslateService } from '@ngx-translate/core';
import { NotificationService } from '../../comman/notification/notification.service';
import { LoaderService } from '../../comman/loader/loader.service';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm!: FormGroup;
    dropdownindex: any;
    constructor(public LoaderService: LoaderService, private _notification: NotificationService, private formBuilder: FormBuilder, private router: Router, public translate: TranslateService) {
    }

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            password: ['', [Validators.required, Validators.minLength(1), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{10,}')]],
            username: ['', [Validators.required, Validators.min(1), Validators.pattern("[a-zA-Z]*")]]
        });

    }

    login() {
        if (this.loginForm.valid) {
            this.router.navigate(['/header'])
        }
    }
}