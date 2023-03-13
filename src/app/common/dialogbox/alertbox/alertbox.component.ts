import { Component,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-alertbox',
  templateUrl: './alertbox.component.html',
  styleUrls: ['./alertbox.component.css']
})
export class AlertboxComponent {
  dialogData:any;
  title: string;
  message: string;
  constructor(public dialogRef: MatDialogRef<AlertboxComponent>,@Inject(MAT_DIALOG_DATA) public data:any) {
    this.dialogData=data
    this.title = data.title;
    this.message = data.message;
  }
  Confirm(): void {
    this.dialogRef.close(true);
  }

  Cancel(): void {
    this.dialogRef.close(false);
  }
// exmaple created for multiple msg in the alert box
  // let errormsg:string="";
  //       let counts:number=0;
  //       let input = { 'title': 'Languague', message: [errormsg.concat((++counts).toString()).concat("."+ "Are you sure you want to change default languague to other languague"),
  //       errormsg.concat((++counts).toString()).concat("."+ "Hello")] }
  //       this.LoaderService.alertDialog(input, '480px').subscribe((data: any) => {
  //         if(data){
  //           return
  //         }
}


