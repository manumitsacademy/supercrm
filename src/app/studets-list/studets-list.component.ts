import { Component, OnInit } from '@angular/core';
import { StudentsService } from '.././students.service';
@Component({
  selector: 'app-studets-list',
  templateUrl: './studets-list.component.html',
  styleUrls: ['./studets-list.component.css']
})
export class StudetsListComponent implements OnInit {

  constructor(private studentsService:StudentsService) { }

  ngOnInit() {
  }

  students=this.studentsService.getAllStudents();
}
