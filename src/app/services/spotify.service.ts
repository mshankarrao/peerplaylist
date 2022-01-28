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
      .set('Authorization', 'Bearer BQBEBnNtGHoZfRLtZoG3gLfNg7ZmCCmiZaffrF13SNXH5QuHdlpCgSvmbSFRCPZKu3kzDipVGt9lPHzPncjPMDpiozhzKf7CZOThpBT9vpRDgo6l00a0ySdwTIvCCIJTCwsQILQ2lebssV4ueh8qgYBSlItoG6hQh2g');
    return this.httpClient.get("https://api.spotify.com/v1/recommendations?limit=10&market=ES&seed_artists=&seed_genres=classical,country,jazz,hiphop",{ 'headers': headers });
  }

}
