import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';
import { studentModel } from './teacher-view.model';
@Component({
  selector: 'app-teacher-view',
  templateUrl: './teacher-view.component.html',
  styleUrls: ['./teacher-view.component.css']
})
export class TeacherViewComponent implements OnInit {
  formValue !:FormGroup;
  studentModelObj: studentModel=new studentModel();
  studentData: any;
  showAdd !: boolean;
  showUpdate !: boolean;
  constructor(private formbuilder: FormBuilder,
    private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.formValue=this.formbuilder.group({
      Roll:['',Validators.required],
      Name:['',Validators.required],
      DOB:['',Validators.required],
      score:['',Validators.required]
    })
    this.getAllStudent();
  }

  logout(){
    this.router.navigate(['teacher-login']);
    localStorage.clear();
  }

  clickAddstudent(){
    this.formValue.reset();
    this.showAdd=true;
    this.showUpdate=false;
  }
  postStudent(){
    this.studentModelObj.id=this.getMax()+1;
    this.studentModelObj.Roll=this.formValue.value.Roll;
    this.studentModelObj.Name=this.formValue.value.Name;
    this.studentModelObj.DOB=this.formValue.value.DOB;
    this.studentModelObj.score=this.formValue.value.score;

    if(this.checkDuplicate(this.formValue.value.Roll)){
      this.api.postStudent(this.studentModelObj)
      .subscribe(res=>{
        console.log(res);
        alert('Student Added Successfully!');
        let ref= document.getElementById('cancel')
        ref?.click();
        this.formValue.reset();
        this.getAllStudent();
      },err=>{
        alert('Something Went Wrong!');
      })
    }
    else{
      alert('Roll number already exist, Please enter valid Roll no.!!');
      this.formValue.reset();
      this.router.navigate(['teacherView'])
    }
  }

 checkDuplicate(res: number){
  for(var i=0; i<this.studentData.length;i++) {
    var obj = this.studentData[i];
    if(obj.Roll===res){return false;}
  }
  return true;
 } 

 getMax(){
   var maxi=0;
   for(var i=0; i<this.studentData.length;i++) {
    var obj = this.studentData[i];
    if(obj.id>maxi){maxi=obj.id}
  }
  return maxi;
 }

 getAllStudent(){
   this.api.getStudent()
   .subscribe(res=>{
     this.studentData=res;
   })
 }

 deleteStudent(row: any){
   this.api.deleteStudent(row.id)
   .subscribe(res=>{
     alert(`Student Name: ${row.Name} deleted`);
     this.getAllStudent();
   })
 }

 getCounter(){
   return this.studentData.length;
 }

 onEdit(row:any){
  this.showAdd=false;
  this.showUpdate=true;
  this.studentModelObj.id=row.id;
  this.formValue.controls['Roll'].setValue(row.Roll)
  this.formValue.controls['Name'].setValue(row.Name)
  this.formValue.controls['DOB'].setValue(row.DOB)
  this.formValue.controls['score'].setValue(row.score)
 }

 updateStudent(){
  this.studentModelObj.Roll=this.formValue.value.Roll;
  this.studentModelObj.Name=this.formValue.value.Name;
  this.studentModelObj.DOB=this.formValue.value.DOB;
  this.studentModelObj.score=this.formValue.value.score;

  this.api.updateStudent(this.studentModelObj,this.studentModelObj.id)
  .subscribe(res=>{
    alert(`${this.studentModelObj.Name} details Update`);
    let ref= document.getElementById('cancel')
    ref?.click();
    this.formValue.reset();
    this.getAllStudent();
  })
 }
}
