import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LoaderService } from 'src/app/comman/loader/loader.service';
import { NotificationService } from 'src/app/comman/notification/notification.service';
import { UserdataService } from 'src/app/comman/service/userdata.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent {
  signForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, public _DataService: UserdataService,
    public loaderService: LoaderService, private _notification: NotificationService, private router: Router, public translate: TranslateService) {
    translate.setDefaultLang('en');

  }
  ngOnInit(): void {
    this.signForm = this.formBuilder.group({
      gender: [''],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      phone: ['', [Validators.required, Validators.minLength(10), Validators.pattern(/^[0-9]\d*$/)]],
      password: ['', [Validators.required, Validators.minLength(1), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{10,}')]],
      username: ['', [Validators.required, Validators.min(8), Validators.pattern("[a-zA-Z]*")]],
      confirmpassword: ['', [Validators.required, Validators.minLength(1), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{10,}')]],
    },
      { validators: passwordMatchValidator });
  }


  signUp() {
    if ((this.signForm.valid)) {
      this._DataService.addUserData(this.signForm.value).subscribe({
        next: (val: any) => {
          this._notification.success(this.loaderService.getTranslatedLanguages('Account_created'), '');
          this.router.navigate(['/login'])
          this.signForm.reset();
        },
        error: (err) => {
          alert("something went wrong")
        }
      })
      return
    }
    else {
      this._notification.warning(this.loaderService.getTranslatedLanguages('Filled_Form_details'), '');
      this.signForm.reset();

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

