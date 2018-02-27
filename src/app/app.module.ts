import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';

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
import { StudentsService } from './students.service';

const r : Routes = [
  
  {path:"students",component:StudetsListComponent,
    children:[
      {path:':name',component:StudentDetailsComponent}
    ]
  },
  {path:"batches",component:DeeptiComponent},
  {path:"abc",component:DeeptiComponent},
  {path:"abc/:id",component:TestrouteComponent},
  {path:"xyz",component:RadikaComponent}
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
    StudentDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
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
    RouterModule.forRoot(r)
  ],
  providers: [StudentsService],
  bootstrap: [HomeComponent]
})
export class AppModule { }
