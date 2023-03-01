import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/enum/user';
import { IntroComponent } from 'src/app/modules/intro/intro.component';

@Component({
  selector: 'app-dailogbox',
  templateUrl: './crudOperation.component.html',
  styleUrls: ['./crudOperation.component.css']
})
export class DailogboxComponent implements OnInit {
  UserForm!: FormGroup;

  CodingLang = ['Angular', 'ASP.NET', 'C#', 'SQL', 'JavaScript', 'HTML', 'JSON', 'Jquery']
  constructor(private formBuilder: FormBuilder, private dialogRef: MatDialogRef<IntroComponent>) {

  }
  ngOnInit(): void {
    this.UserForm = this.formBuilder.group({
      username: [''],
      phone: [''],
      email: ['']
    })
  }
  onSubmit() {
    if (this.UserForm.valid) {
      this.dialogRef.close(true);
    }
    if (this.UserForm.valid) {
      return
    }
  }

}