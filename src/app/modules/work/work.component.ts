import { HttpClient } from '@angular/common/http';
import { Component, Inject, inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, GridApi, GridOptions, INumberFilterParams, ISetFilterParams, ITextFilterParams, SideBarDef } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { DailogboxComponent } from 'src/app/common/dialogbox/cruddialogbox/crudOperation.component';
import { EditAgGridComponent } from 'src/app/common/edit-ag-grid/edit-ag-grid.component';
import { UserdataService } from 'src/app/common/service/userdata.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  public gridOptions!: GridOptions;
  frameworkComponents: any;
  columnDefs: ColDef[] = [];
  rowData: any;
  private gridApi!: GridApi;
  private ChargridApi!: GridApi;
  agGirdShow:boolean=false
  LoginData: any;
  readMore:boolean=false;
  dialogData: any;
  service: any;
  editEnable: boolean=false;

  constructor(public _DataService: UserdataService,private router: Router, private _http: HttpClient,
     public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data:any) {
      this.dialogData=data;
    this.gridOptions = <GridOptions>{
      groupHeaderHeight: 25,
      headerHeight: 60,
      pagination: true,
      suppressPaginationPanel: true,
      suppressCellFocus: true,
      paginationPageSize: 10000,
      suppressPropertyNamesCheck: true,
      suppressRowDeselection: true,
      suppressRowClickSelection: true,
      suppressClickEdit: true
    }
  }
  ngOnInit(): void {
    this.getUsersData();
    this.setColDef();
  }
  getUsersData() {
    this._DataService.getAgGirdData().subscribe
      (res => {
        this.LoginData = res
      })
  }
  setColDef() {
    this.columnDefs = [  
      {
        headerName: "ID", field: 'id', sortable: true,
        checkboxSelection: true,
        headerCheckboxSelection: true,
        filter:false,
        filterParams: {
        } as INumberFilterParams,
      },
      {
        headerName: "Username", field: 'username', sortable: true, filter: true,
        filterParams: {
        } as ISetFilterParams,
      
      },
      {
        headerName: "Email", field: 'email', sortable: true,editable: true,filter: true,
        filterParams: {
        } as ISetFilterParams,
      },
      {
        headerName: "Phone", field: 'phone', sortable: true, filter: true, editable: true,
      },
      {
        headerName: "Skills", field: 'skills', sortable: true, filter: true,
        filterParams: {
          showTooltips: true,
          buttons: ['clear', 'apply'],
          closeOnApply: true,
        } as ISetFilterParams,
      }
    ];
    this.frameworkComponents={  
      editRenderer:  DailogboxComponent,
    }
  }
  public defaultColDef: ColDef = {
    flex: 1,
    minWidth: 200,
    resizable: true,
    floatingFilter: true,
    filter: 'agNumberColumnFilter,agTextColumnFilter,agNumberColumnFilter',
    filterParams: {
      textFormatter: (value: string) => {
          return value
              .replace(/\s/g, '')
              .replace(/[àáâãäå]/g, 'a')
              .replace(/æ/g, 'ae')
              .replace(/ç/g, 'c')
              .replace(/[èéêë]/g, 'e')
              .replace(/[ìíîï]/g, 'i')
              .replace(/ñ/g, 'n')
              .replace(/[òóôõö]/g, 'o')
              .replace(/œ/g, 'oe')
              .replace(/[ùúûü]/g, 'u')
              .replace(/[ýÿ]/g, 'y')
              .replace(/\W/g, '');
      }
    }
  };
  getSelectedRow() {
    const selectedData = this.ChargridApi?.getSelectedRows()?.length;
    if(selectedData ==0 || selectedData >1){
      return true
    }
    else{
      return false
    }
  }
  editUser() {
    const data = this.gridApi.getSelectedRows()[0];
  const dialogRef = this.dialog.open(EditAgGridComponent, {
    
    data:data 
  });
  this.gridApi.applyTransaction({ add: data });

  }
  onGridReady(params: any) {
    this.getUsersData();
    this.ChargridApi=params.api
    this.ChargridApi.hideOverlay
    params.api.sizeColumnsToFit();
    this.gridApi = params.api;
    this.gridApi.refreshCells(params); 
    this.rowData = this.LoginData
  }
  // AddData(action: string) {
  //   let data
  //   if (action == 'ADD') {
  //     data = {
  //       dailogAction: action,
  //       gridData: this.rowData
  //     }
  //   }
  //   const dialogRef = this.dialog.open(DailogboxComponent, {
  //     disableClose: true
  //   });
  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result?.event == 'ADD') {
  //       result.data['index'] = this.rowData?this.rowData.length: 0;
  //       if (this.rowData) {
  //         this.rowData = [...this.rowData, ...result?.data]
  //       }
  //       else {
  //         this.rowData = result?.data
  //       }
  //     }
  //   });
    
  // }
  Cancel(){
    this.router.navigate(['/main'])
  }
  AddData(action:string){
    let newRowData = this.rowData.slice();
    let newId =
      this.rowData.length === 0
        ? 0
        : this.rowData[this.rowData.length - 1].id + 1;
    let newRow = { username: "Md Salim",email: "mdsalimalam8@gmail.com",phone: "+9189715254570",skills: "Angular", id: newId };
    newRowData.push(newRow);
    this.rowData = newRowData;
  }
  deleteRow() {
    const selectedRows = this.gridApi.getSelectedRows();
    if (selectedRows.length > 0) {
      const id = selectedRows[0].id;
       this._DataService.deleteGridData(id)
      .subscribe(() => {
          this.gridApi.applyTransaction({ remove: selectedRows });
        });
    }
  }
  
}