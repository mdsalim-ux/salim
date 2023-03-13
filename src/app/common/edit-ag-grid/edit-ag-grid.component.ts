import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { IntroComponent } from 'src/app/modules/intro/intro.component';
import { UserdataService } from '../service/userdata.service';

@Component({
  selector: 'app-edit-ag-grid',
  templateUrl: './edit-ag-grid.component.html',
  styleUrls: ['./edit-ag-grid.component.css']
})
export class EditAgGridComponent implements OnInit {
  editUserForm!: FormGroup;
  CodingLang = ['Angular', 'ASP.NET', 'C#', 'SQL', 'JavaScript', 'HTML', 'JSON', 'Jquery']
  UserData: any;
  dialogData: any;
  isSubmited: boolean=false;
  LoginData: any;
  
  constructor(private router: Router, @Inject(MAT_DIALOG_DATA) public data:any,private formBuilder: FormBuilder, public _DataService: UserdataService, private dialogRef: MatDialogRef<IntroComponent>) {
    this.dialogData=data;
  }
  ngOnInit(): void {
    this.editUserForm = this.formBuilder.group({
      username: [''],
      phone: [''],
      email: [''],
      skills:['']
    })
  }
OnSubmit(action:any){
  this.editUserForm.markAllAsTouched();
  if (this.editUserForm.valid) {
    this.dialogRef.close(true);      
    this._DataService.AgGirdData(this.editUserForm.value).subscribe(
      val => {
        if(val){
          let currentUrl = this.router.url;
          this.router.routeReuseStrategy.shouldReuseRoute = () => false;
          this.router.onSameUrlNavigation = 'reload';
          this.router.navigate([currentUrl]);
        }
      },
      err => {
      }
    );
  }
}




}
