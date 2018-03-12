import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import { variable } from '@angular/compiler/src/output/output_ast';
import { FormControl, FormGroup, NgModel } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Router } from '@angular/router';

 
@Component({
  selector: 'app-view-courses',
  templateUrl: './view-courses.component.html',
   styleUrls: ['./view-courses.component.css']
})
export class ViewCoursesComponent implements OnInit {

  constructor(private httpClient: HttpClient, public dialog: MatDialog,private router: Router) { }
  courses;
  display;
    newcname: string;
    newcduration:number;
    newcfee: number;
    newcprereq:string;
    id:string;
  Apikey= "?apiKey=ZShQtoghVlx_ZFHYiZa6I0dRCgdoGr--"
  ngOnInit() {
    
    this.httpClient.get("https://api.mlab.com/api/1/databases/academy_crm/collections/Courses/"+this.Apikey)
                    .subscribe((d)=>{
                        this.courses=d;
                        console.log("this is data"+d);
                    });
                   
  }
 
  deleteCourse(v)
  {
    console.log(v._id.$oid)
    var url = "https://api.mlab.com/api/1/databases/academy_crm/collections/Courses/"+v._id.$oid+this.Apikey
    console.log(url)
    this.httpClient.delete(url).subscribe((d)=>{
    console.log(d)
   
    this.httpClient.get("https://api.mlab.com/api/1/databases/academy_crm/collections/Courses/"+this.Apikey)
    .subscribe((d)=>{
        this.courses=d;
        console.log("this is data"+d);
    });
  });
}
  editcourse(course){
    let dialogRef=this.dialog.open(editcoursedialog,{
      width:'500px',
      height:'300px',
      data: { 
        id:course._id.$oid,
        name:course.coursename,
        duration:course.courseduration,
        fee:course.coursefee,
        prereq:course.courseprereq,
        newcname:this.newcname=course.coursename,
        newcduration:this.newcduration=course.courseduration,
        newcfee:this.newcfee=course.coursefee,
        newcprereq:this.newcprereq=course.courseprereq
      }
      
    }
  );
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result== undefined){
        alert("No Changes were made");
      }
      else{
      //console.log(result);
      this.id=result.id;
      this.newcname=result.newcname;
      this.newcduration=result.newcduration;
      this.newcfee=result.newcfee;
      this.newcprereq=result.newcprereq;
      //console.log(this.id,this.newcname,this.newcduration,this.newcfee,this.newcprereq);
      console.log(this.id);
      this.httpClient.put("https://api.mlab.com/api/1/databases/academy_crm/collections/Courses/"+this.Apikey+
      "&q={_id:{$oid:'"+this.id+"'}}",
      {coursename:this.newcname,courseduration:this.newcduration,coursefee:this.newcfee,courseprereq:this.newcprereq})
      .subscribe((d)=>{
        alert("Updated the Course");
      });
      this.router.navigateByUrl('/viewCourses').then((d)=>{
        console.log(d);
      })
    }
    });
    //console.log("reached end of edit course");

  }
}

@Component({
  selector: 'editcoursedialog',
  templateUrl: 'editcoursedialog.html',
})
export class editcoursedialog {
  // courseForm = new FormGroup ({
  //   coursename: new FormControl(),
  //   courseduration: new FormControl(),
  //   coursefee: new FormControl(),
  //   courseprereq: new FormControl(),
  // });
  constructor(
    public dialogRef: MatDialogRef<editcoursedialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}


