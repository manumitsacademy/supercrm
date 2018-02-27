import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

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
    RadikaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatMenuModule,
    RouterModule.forRoot([
      {path:"abc",component:DeeptiComponent},
      {path:"xyz",component:RadikaComponent}
    ])
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
