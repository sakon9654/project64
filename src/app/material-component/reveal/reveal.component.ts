import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { RevealDialogComponent} from '../reveal-dialog/reveal-dialog.component'

@Component({
  selector: 'app-reveal',
  templateUrl: './reveal.component.html',
  styleUrls: ['./reveal.component.css']
})
export class RevealComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  keytest(){
      const dialogRef = this.dialog.open(RevealDialogComponent);
  
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }
}
