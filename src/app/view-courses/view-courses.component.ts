import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-view-courses',
  templateUrl: './view-courses.component.html',
  styleUrls: ['./view-courses.component.css']
})
export class ViewCoursesComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }
  courses;
  Apikey= "?apiKey=ZShQtoghVlx_ZFHYiZa6I0dRCgdoGr--"
  ngOnInit() {
    
    this.httpClient.get("https://api.mlab.com/api/1/databases/academy_crm/collections/Courses/"+this.Apikey)
                    .subscribe((d)=>{
                        this.courses=d;
                        console.log(d);
                    });
  }
  editcourse(name){
    console.log("Reached here");
    console.log(name);
  }

}
