import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/common/loader/loader.service';
import { NotificationService } from 'src/app/common/notification/notification.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(public loader:LoaderService,private _notification:NotificationService) { }
  educationview:boolean=false;
  personaldetails:boolean=false;

  ngOnInit(): void {
  }
  
}