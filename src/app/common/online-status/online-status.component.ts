import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { OnlineStatusService, OnlineStatusType } from 'ngx-online-status';

@Component({
  selector: 'app-online-status',
  templateUrl: './online-status.component.html',
  styleUrls: ['./online-status.component.css']
})
export class OnlineStatusComponent implements OnInit {
  status:any= OnlineStatusType ;
  OnlineStatusType=OnlineStatusType
  Offline: boolean=false;
  currentDate:any;
  count: number = 0;

  constructor(private onlineStatusService: OnlineStatusService,private datePipe: DatePipe  ){

  this.onlineStatusService.status.subscribe((status: OnlineStatusType) => {
    this.status = status;
    if(this.status==0){
      OnlineStatusType.OFFLINE
      this.Offline=true
    }
    if(this.status==1){
      OnlineStatusType.OFFLINE
      this.Offline=false
    }
  });
 }
 ngOnInit(): void {
 const now = new Date();
  this.currentDate = this.datePipe.transform(now, 'short');
  this.startCounter();
  
}
 startCounter() {
  setInterval(() => {
    this.count++;
  }, 1000);
}
}
