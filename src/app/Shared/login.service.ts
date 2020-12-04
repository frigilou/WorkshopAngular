import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Model/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private api:string="http://localhost:3000/users";

  constructor(private http:HttpClient) { }

  GetAllUsers():Observable<User[]>
  {
    return this.http.get<User[]>(this.api);
  }
}
