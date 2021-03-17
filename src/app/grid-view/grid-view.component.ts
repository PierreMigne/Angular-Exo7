import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.css']
})
export class GridViewComponent implements OnInit {

  @Input() rows: string;
  @Input() cols: string;

  rowsArray: Array<any>;

  constructor() { }

  ngOnInit(): void {
    this.rowsArray = Array(+this.rows)
  }



}
