import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
su;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }
studentForm = new FormGroup({
  FirstName: new FormControl(),
  LastName: new FormControl(),
  Age: new FormControl(),

});
addStudent()
{
  this.httpClient.post("https://api.mlab.com/api/1/databases/academy_crm/collections/Students?apiKey=ZShQtoghVlx_ZFHYiZa6I0dRCgdoGr--",this.studentForm.value)
  .subscribe((d)=>{console.log(d)
    this.su=true;
  setTimeout(()=>{
    this.su=false;
  },2000)
  this.studentForm.reset();
  });
}
}
