import { Injectable } from '@angular/core';
import { users } from './users';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  constructor(private http:HttpClient) { }

  url="http://localhost:3000/users/";

  getUsers(){
    return this.http.get<users[]>(this.url);
  }

  createUser(users){
    return this.http.post(this.url,users);
  }

  removeUser(users){
    return this.http.delete(this.url +users.id);
  }
  update(users){
    return this.http.put(this.url +users.id,users);
  }
}