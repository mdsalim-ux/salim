import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NotificationService } from 'src/app/common/notification/notification.service';
import { LoaderService } from 'src/app/common/loader/loader.service';
import { MaterialModule } from 'src/app/angular/material/material.module';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AgGirdData } from 'src/app/common/interface/user';
import { MatSort } from '@angular/material/sort';
import { UserService } from 'src/app/common/service/user.service';
import { UserdataService } from 'src/app/common/service/userdata.service';
import { TranslationModule } from 'src/app/common/translation/translation.module';
import { AlertboxModule } from 'src/app/common/dialogbox/alertbox/alertbox.module';
import {NestedTreeControl} from '@angular/cdk/tree';
import {} from '@angular/core';
import {MatTreeNestedDataSource} from '@angular/material/tree';

/**
 * Food data with nested structure.
 * Each node has a name and an optiona list of children.
 */
interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Backend',
    children: [
      {name: 'SQL'},
      {name: 'C#'},
      {name: 'MVC'},
    ]
  }, {
    name: 'Frontend',
    children: [
      {
        name: 'Angular',
        children: [
          {name: 'TypeScript'},
          {name: 'JSON'},
        ]
      }, {
        name: 'JavaScipt',
        children: [
          {name: 'Jquery',
         children:[
          {name: 'JavaScript library'}
        ]},
          {name: 'JSON',
          children:[
            {name: 'JavaScript Object Notation'}
          ]},
        ]
      },
    ]
  },
];

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainheaderComponent implements AfterViewInit  {
  supportedLanguages = ['en', 'hn','ur'];
  dropdownindex: any;
  isExpanded:boolean=false;
  numberInput:boolean=false;
  decimalInput:boolean=false;
  CopyPasteInput:boolean=false;
  displayedColumns: string[] = ['Id', 'Username', 'Phone', 'Email','Skills'];
  data=new AgGirdData();
  menuHide:boolean=false;
  step = 0;
  dataSource = new MatTableDataSource (this.data.AgGirdData);
  TabIndex: any;
  expensionPanel: boolean=true;
  skillsList: string[] = ['Angular', 'ASP.NET', 'C#', 'SQL', 'JavaScript', 'HTML', 'JSON', 'Jquery'];
  multiSelection: boolean=false;
  AnimationState: boolean=true;
  Skills: any;
  tab: any;
  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSources = new MatTreeNestedDataSource<FoodNode>();
  constructor(public loaderService: LoaderService,public _Service:UserdataService,public dialog: MatDialog,public mat:MaterialModule,
    public _translate: TranslateService,private _notification: NotificationService, private formBuilder: FormBuilder, 
    private router: Router, public translate: TranslationModule,public _dialog:AlertboxModule) {
      this.dataSources.data = TREE_DATA;
      _translate.setDefaultLang('en');
  }
  @ViewChild(MatPaginator)paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit(): void {
    this.getSkills()
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  onDropdownChange(event: any) {
    for (let i = 0; i < event.currentTarget.length; i++) {
      this.dropdownindex = event.currentTarget;
      if (this.dropdownindex.selectedIndex == 0 || this.dropdownindex.selectedIndex == 1 || this.dropdownindex.selectedIndex == 2) {
        this._notification.success(this.translate.getTranslatedLanguages('Language_Change'), '');
        break;
      }
    }
  }
  getSkills() {
    this._Service.getSkill().subscribe((data: any) => { this.Skills = data });
  }
  addColumn() {
    const randomColumn = Math.floor(Math.random() * this.displayedColumns.length);
    this.displayedColumns.push(this.displayedColumns[randomColumn]);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  removeColumn() {
    if (this.displayedColumns.length) {
      this.displayedColumns.pop();
    }
  }
  openDialogSignUp() {
    const dialogRef = this.dialog.open(SignUpComponent,{
      disableClose: true,
      autoFocus:false
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  selectedTabValue(event: any) {
    // on refresh tab change issue
    if (event == undefined) {
      this.router.navigate(['/home'])
      return
    }
    this.TabIndex = event.index;
    if (this.TabIndex == 0) {
      this._notification.info(this.translate.getTranslatedLanguages('Scroll_Down'),'')
    }
    if (this.TabIndex == 1) {
      this._notification.success(this.translate.getTranslatedLanguages('Welcome'),'')
    }
    if (this.TabIndex == 2) {
      this._notification.info(this.translate.getTranslatedLanguages('See_AgGrid'),'')
      this.router.navigate(['/work'])
    }
    if (this.TabIndex == 3) {
      this.openDialogSignUp();
    }
   
 
  }
  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  decimalFilter(event: any) {
    let reg: RegExp = new RegExp(/^\d{1,3}(\.$|\.\d{1,2}$|$)/);
    let input: Array<string> = ['Backspace', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight', 'Del', 'Delete'];
      let value = event.target.value;
      if (input.indexOf(event.key) !== -1) {
        return;
      }
    let current: string = value;
    const position = event.target.selectionStart;
    const positionEnd = event.target.selectionEnd;
    if(current.length >= 3 && position == 0 && positionEnd >= 3){
       current = '';
    }
    const next: string = [current.slice(0, position), event.key == 'Decimal' ? '.' : event.key, current.slice(position)].join('');
      if (next && !String(next).match(reg)) {
       event.preventDefault();  
      }
    }
  numberOnly(event: any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

  specialChar(event: any) {
    let char = event.charCode;
    if (char == 42 || char == 58 || char == 34 || char == 60 || char == 62 || char == 63 || char == 92 || char == 124 || char == 47) {
      let msg: string = "";
      event.preventDefault();
      let input = {'title': '', 
      message: [msg.concat('').concat(this.translate.getTranslatedLanguages('Special_Char_not_allowed')), msg.concat(' ').concat('*:"<>/?\|')]
      }
      this._dialog.AlertDialogBox(input, '460px').subscribe((data: any) => {
        return
      })
    }
  }
  copyPaste(event: any) {
    let msg: string = "";
    let regex = /[*:"<>\/?\\|]/g
    var pastedText = event.clipboardData.getData('text');
    if (regex.test(pastedText)) {
      event.preventDefault();
      let input = {
        message: [msg.concat('').concat(this.translate.getTranslatedLanguages('Special_Char_not_allowed')), msg.concat(' ').concat('*:"<>/?\|')]
      }
      this._dialog.AlertDialogBox(input, '460px').subscribe((data: any) => {
        return
      })
    };
  }
  pauseAnimation() {
    let s = document.getElementById('card') as HTMLElement
    s.style.animationPlayState = 'paused';
    this.AnimationState = false;
  }
  startAnimation() {
    let s = document.getElementById('card') as HTMLElement
    s.style.animationPlayState = 'running';
    this.AnimationState = true;
  }
  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;
}
export interface PeriodicElement {
  Id: number;
  username: string;
  phone: number;
  email: string;
  skills:string
}
