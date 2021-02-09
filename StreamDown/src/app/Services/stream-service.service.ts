import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StreamServiceService {

  REQUEST_URI="/FileDownloader/get/excel/";
  ENTITY_NAME:String="";

  constructor(private http:HttpClient) { }

  // downloadfile(data:any)
  // {
  //     const REQUEST_PARAMS=new HttpParams().set('fileName',data.fileName);
  //     const REQUEST_URI='/api/excel/download';
  //    return this.http.get(REQUEST_URI,{
  //       params:REQUEST_PARAMS,
  //       responseType:'arraybuffer'
  //     })
  //   }

   async downloadfile(value:String): Promise<Observable<Blob>>{
        const REQUEST_URI=this.REQUEST_URI+value;
       return  await this.http.get(REQUEST_URI,{
          responseType:'blob'
        })
      }

      //  REQUEST_URI='/api/excel/download';
      //  downloadfile(): Observable<Blob> {
      //   return  this.http.get(this.REQUEST_URI, {
      //     responseType: 'blob'
      //   })
      // }


}
