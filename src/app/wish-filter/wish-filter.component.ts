import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';

// Filter options, 0 = all, 1 = unfulfilled, 2 = fulfilled
const filters = [
  (item: WishItem) => item,
  (item: WishItem) => !item.isCompleted,
  (item: WishItem) => item.isCompleted,
];

@Component({
  selector: 'wish-filter',
  templateUrl: './wish-filter.component.html',
  styleUrls: ['./wish-filter.component.css'],
})
export class WishFilterComponent implements OnInit {
  @Input() filter: any;

  // create output event emitter
  @Output() filterChange = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {
    // Initialization logic that doesn't involve updating the component state
    this.updateFilter('0');
  }

  // set default list filter to '0'
  listFilter: any = '0';

  updateFilter(value: any) {
    this.filter = filters[value]; // set filter to callback function for filter method on array
    console.log('VALUE', value);
    console.log('FILTER', this.filter);
    console.log('WHATS UP FOOL');

    // emit callback function for filter method on array
    this.filterChange.emit(this.filter); // emits a callback function for filter method on array
  }
}
