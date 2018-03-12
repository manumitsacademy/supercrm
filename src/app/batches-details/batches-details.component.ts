import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-batches-details',
  templateUrl: './batches-details.component.html',
  styleUrls: ['./batches-details.component.css']
})
export class BatchesDetailsComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }
  batchForm = new FormGroup ({
    batchid: new FormControl(),
    batchstartdate: new FormControl(),
  });
  Apikey= "?apiKey=ZShQtoghVlx_ZFHYiZa6I0dRCgdoGr--"

  createBatch(){
    this.httpClient
    .post("https://api.mlab.com/api/1/databases/academy_crm/collections/Batches/"+this.Apikey,this.batchForm.value)
    .subscribe((d)=>{console.log(d)
      if(d){
        alert("Batch Created");
        this.batchForm.reset();
      }
    });
    //console.log(this.courseForm);
    
  }
}
