import { Injectable } from '@angular/core';

@Injectable()
export class StudentsService {

  constructor() { }
  studentsList=[
    {name:"praveen",age:"34",gender:"male"},
    {name:"nishant",age:"22",gender:"male"},
    {name:"radika",age:"21",gender:"female"},
    {name:"dipti",age:"20",gender:"female"}   
  ];
  getAllStudents(){
    return this.studentsList;
  }
  getStudentDetailsByName(n){
    for(let i = 0;i<this.studentsList.length;i++){
      if(n==this.studentsList[i].name){
        return this.studentsList[i];
      }
    }
    return "No Student Found";
  }
}
