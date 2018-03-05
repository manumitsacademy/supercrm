import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }
  courseForm = new FormGroup ({
    coursename: new FormControl(),
    courseduration: new FormControl(),
    coursefee: new FormControl(),
    courseprereq: new FormControl(),
  });
  addCourse(){
    this.httpClient
    .post("https://api.mlab.com/api/1/databases/demo/collections/test?apiKey=-Ky8Wk0gH3HSexYngXpRI6Wg2itAnavf",this.courseForm.value)
    .subscribe((d)=>{console.log(d)});
    //console.log(this.courseForm);
  }

}
