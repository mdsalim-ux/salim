import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  downloadCV() {
    let link = document.createElement('a');
    link.setAttribute('type', 'hidden');
    link.href = 'assets/resume/MdSalimAlamResume.pdf';
    link.download = "MdSalimAlamResume";
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
  readMore() {
    this.router.navigate(['/intro']);
  }
  contact() {
    this.router.navigate(['/contact']);
  }
}