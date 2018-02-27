import { Component, OnInit } from '@angular/core';
import { StudentsService } from '.././students.service';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  constructor(
      private studentsService:StudentsService,
      private activatedRoute:ActivatedRoute
    ) {}
  studentDetails;
  ngOnInit() {
    this.activatedRoute.params.subscribe((d)=>{
      this.studentDetails = this.studentsService
                                .getStudentDetailsByName(d.name) ;
      console.log(this.studentDetails);
    });
    
  }

  
}
