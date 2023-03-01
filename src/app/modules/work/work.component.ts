import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DailogboxComponent } from 'src/app/comman/dailogbox/crudOperation.component';
import { User } from 'src/app/enum/user';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent {


constructor(public dialog: MatDialog) {}

openDialog() {
  const dialogRef = this.dialog.open(DailogboxComponent,{
    disableClose: true
  }
 );
  dialogRef.afterClosed().subscribe(result => {
  });
}
}