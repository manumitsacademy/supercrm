import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgModel } from '@angular/forms'

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatExpansionModule} from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material'

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { BatchesComponent } from './batches/batches.component';
import { StudentsComponent } from './students/students.component';
import { EmployeesComponent } from './employees/employees.component';
import { ProgrammesComponent } from './programmes/programmes.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { DeeptiComponent } from './deepti/deepti.component';
import { RadikaComponent } from './radika/radika.component';
import { TestrouteComponent } from './testroute/testroute.component';
import { StudetsListComponent } from './studets-list/studets-list.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { HomeDetailsComponent } from './home-details/home-details.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { ViewCoursesComponent,editcoursedialog } from './view-courses/view-courses.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentsService } from './students.service';
import { CoursesService } from './courses.service';
import { ViewStudentComponent } from './view-student/view-student.component';

const r : Routes = [
  
  {path:"students",component:StudetsListComponent,
    children:[
      {path:':name',component:StudentDetailsComponent}
    ]
  },
  {path:"abc/:id",component:TestrouteComponent},
  {path:"radika",component:RadikaComponent},
  {path:"",component:HomeDetailsComponent},
  {path:"addCourse",component:AddCourseComponent},
  {path:"viewCourses",component:ViewCoursesComponent},
  {path:"addStudent",component:AddStudentComponent},
  {path:"viewStudents",component:ViewStudentComponent}
 
];

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    BatchesComponent,
    StudentsComponent,
    EmployeesComponent,
    ProgrammesComponent,
    HomeComponent,
    DetailsComponent,
    DeeptiComponent,
    RadikaComponent,
    TestrouteComponent,
    StudetsListComponent,
    StudentDetailsComponent,
    HomeDetailsComponent,
    AddCourseComponent,
    ViewCoursesComponent,
    AddStudentComponent,
    ViewStudentComponent,
    editcoursedialog

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatExpansionModule,
    MatListModule,
    MatDialogModule,
    FormsModule,
    RouterModule.forRoot(r)
  ],
  entryComponents:[ViewCoursesComponent,editcoursedialog],
  providers: [StudentsService],
  bootstrap: [HomeComponent]
})
export class AppModule { }
