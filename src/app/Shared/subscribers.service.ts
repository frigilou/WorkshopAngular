import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { subscriber } from '../Model/subscriber';

@Injectable({
  providedIn: 'root'
})
export class SubscribersService {

  private api:string="http://localhost:3000/subscribers";
  httpOptions={headers:new HttpHeaders({
    'Content-Type':'application/json'})}

  constructor(private http:HttpClient) { }

  GetAllSubscribers():Observable<subscriber[]>
  {
    return this.http.get<subscriber[]>(this.api);
  }

  DeleteSubscriber(myobject: subscriber | number):Observable<subscriber>
  {
     const id= typeof myobject==='number'?myobject:myobject.id;
     return this.http.delete<subscriber>(this.api+"/"+id);
  }

  GetSubscriberById(id:number):Observable<subscriber>
  {
    return this.http.get<subscriber>(this.api+"/"+id);
  }

  UpdateSubscriber(subscriber:subscriber,id:number):Observable<subscriber>
  {
    return this.http.put<subscriber>(this.api+"/"+id,subscriber,this.httpOptions);
  }

  AddSubscriber(subscriber:subscriber):Observable<subscriber>
  {
    return this.http.post<subscriber>(this.api,subscriber,this.httpOptions);
  }
}
