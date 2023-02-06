import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table-header',
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.scss']
})
export class TableHeaderComponent implements OnInit {
  @Input() searchName: string;
  @Output() searchNameChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  searchFilterChange = () => this.searchNameChange.emit(this.searchName)

}
