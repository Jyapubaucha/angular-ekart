import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText: string = '';

  //Create an event
  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();
  
  noSearchTextChanged(){
    this.searchTextChanged.emit(this.searchText);
  }



  updateSearchText(event: any) {
    this.searchText = event.target.value;
  }


}
