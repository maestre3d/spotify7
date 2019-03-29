import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAfeZvtiBsDKwhCkSoIOdMn-cRnyOGzDD7_l6-_OUw_UN1igu05wKr0G-uk-S46gbC5JiKLTA6B68MCI5uhx670GBb8q7hxYLdgP7j3DUgUTjLn7BsAU4WqZDAflYYDDGR0223b76qIV5qAs3s'
    });

    return this.http.get(url, {headers});

  }

  constructor( private http: HttpClient ) {
  }

  getNewReleases() {

    return this.getQuery('browse/new-releases?country=MX&limit=20')
        .pipe( map( data => data['albums'].items ) );
  }

  getArtists( query: string ) {

    return this.getQuery(`search?q=${query}&type=artist&market=MX&limit=10`)
        .pipe(  map( data => data['artists'].items));
  }
}
