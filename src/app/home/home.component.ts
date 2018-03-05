import { NgModule } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[CoursesService]
  
})
export class HomeComponent implements OnInit {

  @ViewChild('sidenav') sidenav: MatSidenav;
  reason = '';
  result;
  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
  
  constructor(private httpClient: HttpClient,public coursesService:CoursesService) {}
  courses;
  ngOnInit() {
    this.coursesService.getCourses().subscribe((d)=>{console.log(d)});
    console.log("Hello Async")
   
  }
}
