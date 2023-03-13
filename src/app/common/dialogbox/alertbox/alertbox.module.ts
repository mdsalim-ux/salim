import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/angular/material/material.module';
import { TranslationModule } from 'src/app/common/translation/translation.module';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { AlertboxComponent } from './alertbox.component';
import { Observable } from 'rxjs';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MaterialModule,
        TranslationModule,
        MatDialogModule
    ]
})
export class AlertboxModule { 
    constructor(public dialog:MatDialog){

    }
    AlertDialogBox(input: any, width: any): Observable<any> {
        const dialogRef = this.dialog.open(AlertboxComponent, {
          width: width,
          autoFocus: false,
          data: input,
          disableClose: true
        });
        return dialogRef.afterClosed()
      }
}
