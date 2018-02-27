import { NgModule } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent implements OnInit {

  @ViewChild('sidenav') sidenav: MatSidenav;

  disp_title="click to view full details";
  d=[];
  events=["One","two"];
  c_d;

  reason = '';

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'thumbs-up',
        sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/thumbup-icon.svg'));
  }

  ngOnInit() {
  }
  show(r){
    this.c_d=r;
    console.log(r)
  }
  save(n,a){
    var k={"name":n,"age":a};   
    this.d.push(k)
    console.log("JJI",this.d)
  }

}
