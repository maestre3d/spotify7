import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() items: any = [];


  constructor(private snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }

  openSnackBar(message: string, artist: string, action: string) {
    message = `You liked ${message} by ${artist}.`;
    action = 'UNDO';
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
