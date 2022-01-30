import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private httpClient: HttpClient) {

  }

  getRecommendations() {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Authorization', 'Bearer BQAgjf71KCf83U3dIDaaWRlqgEQh0MyucaAP9bzR5sT2_Suzk601QmD_7PTZWH4Kk8-ch65tk_LMDcAgCL4OGaZ62wA5bCLh9WVh_MmjeBQ_tmjroP25YWDTKSmwtA0U_QRT7HUYaaDDKOU7AUtCGWlz_0ckLPSBJ0E');
    return this.httpClient.get("https://api.spotify.com/v1/recommendations?limit=10&market=ES&seed_artists=&seed_genres=classical,country,jazz,hiphop",{ 'headers': headers });
  }

}
