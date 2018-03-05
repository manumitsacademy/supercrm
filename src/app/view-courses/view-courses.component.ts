import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-courses',
  templateUrl: './view-courses.component.html',
  styleUrls: ['./view-courses.component.css']
})
export class ViewCoursesComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }
  courses;
  ngOnInit() {
    
    this.httpClient.get("https://api.mlab.com/api/1/databases/demo/collections/test?apiKey=-Ky8Wk0gH3HSexYngXpRI6Wg2itAnavf")
                    .subscribe((d)=>{
                        this.courses=d;
                        console.log(d);
                    });
  }

}
