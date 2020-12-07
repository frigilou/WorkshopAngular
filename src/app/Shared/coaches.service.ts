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

  AddAbcense(object:coach):Observable<coach>
  {
     object.Nombreabscense++;
     return this.http.put<coach>(this.api+"/"+object.id,object,this.httpOptions);
  }

  DeleteCoach(object:coach):Observable<coach>
  {
    return this.http.delete<coach>(this.api+"/"+object.id,this.httpOptions);
  }

  UpdateCoach(Object:coach,id:number):Observable<coach>
  {
    return this.http.put<coach>(this.api+"/"+id,Object,this.httpOptions);
  }

  AddCoach(object:coach):Observable<coach>
  {
    return this.http.post<coach>(this.api,object,this.httpOptions);
  }

  GetCoachById(id:number):Observable<coach>
  {
    return this.http.get<coach>(this.api+"/"+id);
  }

}
