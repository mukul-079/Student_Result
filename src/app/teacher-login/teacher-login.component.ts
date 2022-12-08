import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-login',
  templateUrl: './teacher-login.component.html',
  styleUrls: ['./teacher-login.component.css']
})
export class TeacherLoginComponent implements OnInit {
  public loginForm!: FormGroup;
  constructor(private formBuilder :FormBuilder, private http: HttpClient, private router: Router){}

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }

  login(){
    this.http.get<any>("http://localhost:3000/api/teacher")
    .subscribe(res=>{
      const user=res.find((a:any)=>{
        return a.email===this.loginForm.value.email && a.password===this.loginForm.value.password 
      });
      if(user){
        alert('Login Success !!');
        localStorage.setItem('password',this.loginForm.value.password);
        this.loginForm.reset();
        this.router.navigate(['teacher-view']);
      }
      else{
        alert("User not found !!");
      }
    },err=>{
      console.log(err);
      alert('Something Went Wrong');
    })
  }
}
