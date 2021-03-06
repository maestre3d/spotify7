import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newReleases: any[] = [];
  public loaded: boolean;

  constructor( private spotify: SpotifyService ) {
    this.loaded = true;
    this.spotify.getNewReleases().subscribe( ( data: any ) => {
      if ( data ) {
        console.log(data);
        this.newReleases = data;
        this.loaded = false;
      } else {
        this.loaded = false;
      }
    });
  }

  ngOnInit() {
  }

}
