import { Injectable } from '@angular/core';
import { user } from './form/user.module';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: user;
  constructor(private http: HttpClient) { }
senddata(){
  this.http.post('http://localhost:3000/api/send', this.user);
}
}
