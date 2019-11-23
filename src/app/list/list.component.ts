import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { user } from '../form/user.module';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  userData: any;

  constructor(public userservice: UserService ) { }

  ngOnInit() {
    this.userData = this.userservice.user;
    console.log(this.userData);
  }

}
