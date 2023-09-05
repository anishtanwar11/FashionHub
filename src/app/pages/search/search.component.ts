import { Component, OnInit, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

enteredSearchedValue: string = '';
@Output()
 searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

 onsearchTextChanged(){
  this.searchTextChanged.emit(this.enteredSearchedValue);
 }

}
