import { HttpProgressEvent } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {saveAs} from 'file-saver';
import {StreamServiceService} from '../Services/stream-service.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {

 
  selectedEntity: string = '';

  constructor(private service:StreamServiceService) { }

  ngOnInit(): void {
  }



  async downloadfile(value:String){
   
        (await this.service.downloadfile(value))
        .subscribe(data=>{
          saveAs(new Blob([data],{type:'application/vnc.openxmlformats-officedocument.spreadsheetxml.sheet'}),value+".xlsx")
              
        })
        
  }


selectChangeHandler (event: any) {
  this.selectedEntity = event.target.value;
  console.log(event.target.value);
}







}
