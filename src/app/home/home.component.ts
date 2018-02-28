import { NgModule } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
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
  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient
    .get("http://localhost:3200/getMovies")
    .subscribe((d)=>{this.result=d});
  }
}
