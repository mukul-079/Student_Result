import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {map} from 'rxjs/operators'
import { BehaviorSubject, Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public _subject=new BehaviorSubject<any>('');
  emit<T>(data:T){this._subject.next(data)}
  on<T>():Observable<T>{return this._subject.asObservable();}

  postStudent(data: any){
    return this.http.post<any>("http://localhost:3000/api/post",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getStudent(){
    return this.http.get<any>("http://localhost:3000/api/student")
    .pipe(map((res:any)=>{
      return res;
    }))
  }


  deleteStudent(id:number){
    return this.http.delete<any>("http://localhost:3000/api/delete/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updateStudent(data: any,id:number){
    return this.http.put<any>("http://localhost:3000/api/update/"+id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
