import { Component, OnInit } from '@angular/core';
import { user } from './user.module';
import { UserService } from '../user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(public userservice:UserService) { }

  User: user [] = [];
  name: any;
  amount: any;
  hospitalName: any;
  hospitalAddress: any;
  contact: any;
  prescriptionType: any;

submit(){
  const user : user = {
    name: this.name,
    amount: this.amount,
    hospitalName: this.hospitalName,
    hospitalAddress: this.hospitalAddress,
    contact: this.contact,
    prescriptionType: this.prescriptionType
  };
 this.userservice.user = user;
 console.log(this.userservice.user);
}
  ngOnInit() {
  
  }

}
