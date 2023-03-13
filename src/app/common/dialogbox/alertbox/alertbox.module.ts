import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/angular/material/material.module';
import { TranslationModule } from 'src/app/common/translation/translation.module';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MaterialModule,
        TranslationModule,
        MatDialogModule
    ]
})
export class AlertboxModule { }
