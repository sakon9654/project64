import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import { RevealService,Item } from '../../shared/service/reveal.service';


@Component({
  selector: 'app-dialog-bor',
  templateUrl: './dialog-bor.component.html',
  styleUrls: ['./dialog-bor.component.css']
})
export class DialogBorComponent implements OnInit {
  
  key: any =''
  dataRow = [];

  constructor(public Source: RevealService) { }

  ngOnInit(): void {
    this.key = localStorage.getItem('filterKey')
    console.log('test')

    this.Source.filter(this.key).subscribe(
          data => {
            this.dataRow = data.return
            console.log(this.dataRow);
          }
    )
  }

  displayedColumns: string[] = ['id', 'supplie_name','price', 'unit', 'unit_name'];
 
  test(row: any){
    console.log(row)
    this.Source.pushService(row)
  }
}
