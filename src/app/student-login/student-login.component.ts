import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent implements OnInit {
  resultFind!: FormGroup;
  searchData!:any
  constructor(private apiService :ApiService, private formBuilder :FormBuilder, private http: HttpClient, private router: Router){}
  ngOnInit(): void {
    this.resultFind=this.formBuilder.group({
      Roll:['',Validators.required],
      Name:['',Validators.required]
    })
  }

  result(){
    this.http.get<any>("http://localhost:3000/api/student")
    .subscribe(res=>{
      const user=res.find((a:any)=>{
        if(a.Name==this.resultFind.value.Name && a.Roll==this.resultFind.value.Roll){
          this.searchData=a;
          return this.searchData;
        } 
      });
      if(this.searchData){
        alert('Result Found');
        this.apiService.emit<any>(this.searchData);
        this.router.navigate(['student-view']);
      }
      else{
        alert("Result not Found, Please enter Valid Rollno & Name !!");
      }
    },err=>{
      alert('Something Went Wrong');
    })
  }
}
