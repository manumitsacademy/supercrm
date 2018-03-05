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
  su;
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
    .post("https://api.mlab.com/api/1/databases/test_db/collections/courses/?apiKey=H8BSxibrCZLRkwy1C13ofhn-STVv_bxo",this.courseForm.value)
    .subscribe((d)=>{console.log(d)
      this.su=true;
    setTimeout(()=>{
      this.su=false;
    },2000)
    this.courseForm.reset();
    });
    //console.log(this.courseForm);
  }

}
