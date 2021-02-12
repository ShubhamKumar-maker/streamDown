import { Injectable,Inject } from '@angular/core';
import {HttpClient, HttpParams,HttpEvent} from "@angular/common/http";
import { Observable } from 'rxjs';
import { download, Download } from "../../download"
import {saveAs} from 'file-saver';
import { SAVER, Saver } from "../../saver.provider"

@Injectable({
  providedIn: 'root'
})
export class StreamServiceService {

  REQUEST_URI="";
  ENTITY_NAME:String="";

  constructor(
    private http: HttpClient,
    @Inject(SAVER) private save: Saver
  ) {
  }

  // downloadfile(data:any)
  // {
  //     const REQUEST_PARAMS=new HttpParams().set('fileName',data.fileName);
  //     const REQUEST_URI='/api/excel/download';
  //    return this.http.get(REQUEST_URI,{
  //       params:REQUEST_PARAMS,
  //       responseType:'arraybuffer'
  //     })
  //   }

  download(url: string, filename?: string): Observable<Download> {
    const REQUEST_URI='/FileDownloader/get/excel/'+filename;
    return this.http.get(REQUEST_URI, {
      reportProgress: true,
      observe: 'events',
      responseType: 'blob'
    }).pipe(download(blob => this.save(blob, filename+".xlsx")))
  }


  blob(url: string, filename?: string): Observable<Blob> {
    return this.http.get(url, {
      responseType: 'blob'
    })
  }

      //  REQUEST_URI='/api/excel/download';
      //  downloadfile(): Observable<Blob> {
      //   return  this.http.get(this.REQUEST_URI, {
      //     responseType: 'blob'
      //   })
      // }


}
