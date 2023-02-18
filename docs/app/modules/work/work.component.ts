import { Component } from '@angular/core';
import { User } from 'src/app/enum/user';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent {
  CodingLang = ['Angular', 'ASP.NET', 'C#', 'SQL', 'JavaScript', 'HTML', 'JSON', 'Jquery']
  userModel = new User('Md Salim Alam', 'salim@gmail.com', '', '', '', true)
}
