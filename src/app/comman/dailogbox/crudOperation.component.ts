import { Component,Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { User } from 'src/app/enum/user';
import { IntroComponent } from 'src/app/modules/intro/intro.component';
import { UserdataService } from '../service/userdata.service';

@Component({
  selector: 'app-dailogbox',
  templateUrl: './crudOperation.component.html',
  styleUrls: ['./crudOperation.component.css']
})
export class DailogboxComponent implements OnInit {
  UserForm!: FormGroup;
  CodingLang = ['Angular', 'ASP.NET', 'C#', 'SQL', 'JavaScript', 'HTML', 'JSON', 'Jquery']
  UserData: any;
  dialogData: any;
  isSubmited: boolean=false;
  LoginData: any;
  constructor(private router: Router, @Inject(MAT_DIALOG_DATA) public data:any,private formBuilder: FormBuilder, public _DataService: UserdataService, private dialogRef: MatDialogRef<IntroComponent>) {
    this.dialogData=data;
  }
  ngOnInit(): void {
    this.UserForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.pattern("^[a-zA-Z\\s]*$")]],
      phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^[0-9]\d*$/)]],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      skills:['']
    })

  }

  getUsersData() {
    this._DataService.getAgGirdData().subscribe
      (res => {
        this.LoginData = res
      })
  }
  onSubmit(action:any) {
    this.UserForm.markAllAsTouched();
    if (this.UserForm.valid) {
      
      this.dialogRef.close(true);      
      let UserFormData=[];
      UserFormData.push({...this.LoginData})
      this.dialogRef.close({event:'add',data:UserFormData})
      this._DataService.AgGirdData(this.UserForm.value).subscribe
        (val => {
          if(val){
            let currentUrl = this.router.url;
            this.router.routeReuseStrategy.shouldReuseRoute = () => false;
            this.router.onSameUrlNavigation = 'reload';
            this.router.navigate([currentUrl]);
          }
        }, err => {
        });
    }
  }
  

}