import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import { variable } from '@angular/compiler/src/output/output_ast';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }
students;
  ngOnInit() {
    this.httpClient.get("https://api.mlab.com/api/1/databases/academy_crm/collections/Students?apiKey=ZShQtoghVlx_ZFHYiZa6I0dRCgdoGr--")
    .subscribe((d)=>{
        this.students=d;
        console.log("this is data"+d);
    });
  }
deleteStudent(v){
    console.log(v._id.$oid)
    var url = "https://api.mlab.com/api/1/databases/academy_crm/collections/Students/"+v._id.$oid+"?apiKey=ZShQtoghVlx_ZFHYiZa6I0dRCgdoGr--"
    console.log(url)
    this.httpClient.delete(url).subscribe((d)=>{
    console.log(d)
   
    this.httpClient.get("https://api.mlab.com/api/1/databases/academy_crm/collections/Students?apiKey=ZShQtoghVlx_ZFHYiZa6I0dRCgdoGr--")
    .subscribe((d)=>{
        this.students=d;
        console.log("this is data"+d);
    });
  });
  }
  editStudent(){
    
  }
}

