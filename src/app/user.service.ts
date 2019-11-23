import { Injectable } from '@angular/core';
import { user } from './form/user.module';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
senddata(){
  this.http.post('http://localhost:3000/api/user', this.user).subscribe(
    responce => {
      console.log(responce);
    }
  );
}
  user: user[] = [];

}
