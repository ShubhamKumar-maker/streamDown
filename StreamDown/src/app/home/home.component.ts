import { HttpProgressEvent,HttpEvent ,HttpResponse,HttpEventType} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {saveAs} from 'file-saver';
import { Observable } from 'rxjs'
import { Download } from "../../download"
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



  // async downloadfile(value:String){
   
  //       (await this.service.downloadfile(value))
  //       .subscribe(data=>{
  //         saveAs(new Blob([data],{type:'application/vnc.openxmlformats-officedocument.spreadsheetxml.sheet'}),"newfile.jpeg")
              
  //       })
        
  // }


  


  //  downloadfile(value:String){
   
  //   (await this.service.downloadfile(value))
  //   .subscribe(data=>{
  //     const event: HttpEvent<Blob> = data
  //     console.log(event.loaded);

  //     if(this.isHttpProgressEvent(data))
  //     {
  //           console.log(event.loaded);
  //     }
      
          
  //   })

  // http://localhost:8900/FileDownloader/get/excel/Student


  slides = 
  {name: "", url: '/FileDownloader/api/excel/download/'}

download$!: Observable<Download>




download({name, url}: {name: string, url: string}) {
  this.download$ = this.service.download(url, name)
}

    






selectChangeHandler (event: any) {
  this.selectedEntity = event.target.value;
  this.slides.name=event.target.value;
  this.slides.url+=event.target.value;
  console.log(event.target.value);
}







}
