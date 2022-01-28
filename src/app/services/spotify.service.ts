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
      .set('Authorization', 'Bearer BQCQkLGszawA4TjtOQhury4UPJai7hcdCWVWYNMccJMO2mBpC6rKD94Z013KjeyftHFwbwEA5-dNqnkyQWeS27OmotCMMpSgZMbB1k1tCXjNoW5kuIsIuVXRqUq7ofHzWgJ5rA_vnBkKPimVHusJeDO91Mw8IBSg-yY');
    return this.httpClient.get("https://api.spotify.com/v1/recommendations?limit=10&market=ES&seed_artists=&seed_genres=classical,country,jazz,hiphop",{ 'headers': headers });
  }

}
