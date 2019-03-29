import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { MatSnackBar } from '@angular/material';
import { of, timer, Subject } from 'rxjs';
import { debounce, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-browser',
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.css']
})
export class BrowserComponent implements OnInit {

  public found: boolean;
  public loaded: boolean;
  artists: any[] = [];

  model: string;
  modelChanged: Subject<string> = new Subject<string>();

  constructor(private spotify: SpotifyService, private snackBar: MatSnackBar) {
    this.found = false;
    this.modelChanged.pipe(
      debounceTime(500))
      .subscribe(model => {
        // console.log(model);
        this.found = true;
        this.loaded = true;
        this.applyFilter(model);
      });
  }

  ngOnInit() {
  }

  changed(text: string) {
    this.modelChanged.next(text);
  }

  applyFilter(filterValue: string) {
    if ( filterValue !== '') {
      this.spotify.getArtists(filterValue)
      .subscribe( ( data: any) => {
        this.artists = data;
        if (this.artists.length > 0 ) {
          this.loaded = false;
          this.found = true;
        } else {
          this.loaded = false;
          this.found = false;
        }
      });
    } else {
      this.artists = [];
      this.loaded = false;
      this.found = false;
    }
  }

  openSnackBar(message: string, action?: string) {
    message = `You started to follow ${message}.`;
    action = 'UNDO';
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
