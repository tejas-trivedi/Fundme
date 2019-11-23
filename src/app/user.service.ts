import { Injectable } from '@angular/core';
import { user } from './form/user.module';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: user[] = [];
  constructor() { }
}
