import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class CoursesService {

  constructor() { }

  courses=[{name:"Angular",cost:"10000"},{name:"PHP",cost:"15000"}];

  getCourses(){
    var myObservable = Observable.create(observer => {      
      setTimeout(() => {
        observer.next(this.courses[0]);
        setTimeout(()=>{ observer.next(this.courses[1]);},2000);       
      }, 1);
    });
    return myObservable;
  }
  getCoursebyName(){
    
  }
}
