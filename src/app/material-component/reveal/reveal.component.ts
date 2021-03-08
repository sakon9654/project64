import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { from } from 'rxjs';
import { RevealDialogComponent} from '../reveal-dialog/reveal-dialog.component';
import { RevealService,Item } from '../../shared/service/reveal.service';

@Component({
  selector: 'app-reveal',
  templateUrl: './reveal.component.html',
  styleUrls: ['./reveal.component.css']
})
export class RevealComponent implements OnInit {

  public row:Array<Item> = [];

  constructor(
              public dialog: MatDialog,
              public Source: RevealService
              ) { }

  ngOnInit(): void {
    this.Source.source$.subscribe({
      next: s => {
        this.row = s
      }
    })
  }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  keytest(){
      const dialogRef = this.dialog.open(RevealDialogComponent);
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }
}
