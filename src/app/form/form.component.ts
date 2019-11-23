import { Component, OnInit } from '@angular/core';
import { user } from './user.module';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  User: user [] = [];
  name: any;
  amount: any;
  hospitalName: any;
  hospitalAddress: any;
  contact: any;

submit(){
  console.log(this.name);
  console.log(this.amount);
  console.log(this.hospitalName);
  console.log(this.hospitalAddress);
  console.log(this.contact);
  
}
  ngOnInit() {
  }

}
