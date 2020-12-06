import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { coach } from '../Model/coach';

@Injectable({
  providedIn: 'root'
})
export class CoachesService {

  private api:string="http://localhost:3000/coaches";
  httpOptions={headers:new HttpHeaders({
    'Content-Type':'application/json'})}

  constructor(private http:HttpClient) { }

  GetAllCoaches():Observable<coach[]>
  {
    return this.http.get<coach[]>(this.api);
  }

  AddHours(object:coach):Observable<coach>
  {
     object.Hours_work+4;
     return this.http.put<coach>(this.api+"/"+object.id,object,this.httpOptions);
  }
}
