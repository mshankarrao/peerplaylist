import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

const CREATE_CHANNEL_URL = 'https://tender-fox-53.redoc.ly/create/channel';
const CREATE_OBJECT_URL = 'https://tender-fox-53.redoc.ly/create/object';
const LISTEN_CHANNEL_URL = 'https://tender-fox-53.redoc.ly/listen/channel';

@Injectable({
  providedIn: 'root'
})
export class SonrService {
  
  constructor(private httpClient: HttpClient) { }

  createObject() {
    const params = new HttpParams()
    .set('creator', "shankar.snr")
    .set('label',"testsnr")
    .set('description',"this is test snr");
    this.httpClient.post(CREATE_OBJECT_URL,{},{'params':params})
  }

  
  createChannel() {
    const params = new HttpParams()
    .set('creator', "shankar.snr")
    .set('label',"testsnr")
    .set('objectDid', "demodid")
    .set('label',"testsnr")
    .set('description',"this is test snr");
    this.httpClient.post(CREATE_CHANNEL_URL,{},{'params':params})
  }


  listenChannel() {
    const params = new HttpParams()
    .set('did', "testdid")
    this.httpClient.post(LISTEN_CHANNEL_URL,{},{'params':params})
  }


}
