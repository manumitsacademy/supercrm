import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import { FormControl, FormGroup } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-view-courses',
  templateUrl: './view-courses.component.html',
  styleUrls: ['./view-courses.component.css']
})
export class ViewCoursesComponent implements OnInit {

  constructor(private httpClient: HttpClient, public dialog: MatDialog) { }
  courses;
  Apikey= "?apiKey=ZShQtoghVlx_ZFHYiZa6I0dRCgdoGr--"
  ngOnInit() {
    
    this.httpClient.get("https://api.mlab.com/api/1/databases/academy_crm/collections/Courses/"+this.Apikey)
                    .subscribe((d)=>{
                        this.courses=d;
                        console.log(d);
                    });
  }
  editcourse(course){
    let dialogRef=this.dialog.open(editcoursedialog,{
      width:'300px',
      data: { name:course }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }

}

@Component({
  selector: 'editcoursedialog',
  templateUrl: 'editcoursedialog.html',
})
export class editcoursedialog {

  constructor(
    public dialogRef: MatDialogRef<editcoursedialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}


