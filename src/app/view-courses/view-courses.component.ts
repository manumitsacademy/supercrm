import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import { variable } from '@angular/compiler/src/output/output_ast';
import { FormControl, FormGroup } from '@angular/forms';

 
@Component({
  selector: 'app-view-courses',
  templateUrl: './view-courses.component.html',
   styleUrls: ['./view-courses.component.css']
})
export class ViewCoursesComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }
  courses;
  display;
  ngOnInit() {
    
    this.httpClient.get("https://api.mlab.com/api/1/databases/academy_crm/collections/Courses/?apiKey=H8BSxibrCZLRkwy1C13ofhn-STVv_bxo")
                    .subscribe((d)=>{
                        this.courses=d;
                        console.log("this is data"+d);
                    });
                   
  }
 
  deleteCourse(v)
  {
    console.log(v._id.$oid)
    var url = "https://api.mlab.com/api/1/databases/academy_crm/collections/Courses/"+v._id.$oid+"?apiKey=H8BSxibrCZLRkwy1C13ofhn-STVv_bxo"
    console.log(url)
    this.httpClient.delete(url).subscribe((d)=>{
    console.log(d)
   
    this.httpClient.get("https://api.mlab.com/api/1/databases/academy_crm/collections/Courses/?apiKey=H8BSxibrCZLRkwy1C13ofhn-STVv_bxo")
    .subscribe((d)=>{
        this.courses=d;
        console.log("this is data"+d);
    });
  });
  }
}
