import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatButtonModule, MatCheckboxModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule,MatSlideToggleModule]
})
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent implements OnInit {

  disp_title="click to view full details";
  d=[];
  c_d;
  constructor() { }

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
