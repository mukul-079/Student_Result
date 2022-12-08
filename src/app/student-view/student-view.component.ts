import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css']
})
export class StudentViewComponent implements OnInit {
  resultData !: any;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.on<any>().subscribe(
      data=>{
        this.resultData=data;
      })
  }
}
  
