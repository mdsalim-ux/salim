import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../comman/service/user.service';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm!: FormGroup;
    submitted: boolean=false;

    constructor(private formBuilder: FormBuilder, private router: Router, private _commonApi: UserService) {

    }

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            username: ['1', Validators.required]
        });

    }
 

    onSubmit() {  
            this.router.navigate(['/header'])
    }
   
}