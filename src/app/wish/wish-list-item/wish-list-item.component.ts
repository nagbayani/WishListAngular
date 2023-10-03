import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';
import { EventService } from 'src/shared/models/services/EventService'; // import events service

@Component({
  selector: 'wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrls: ['./wish-list-item.component.css'],
})
export class WishListItemComponent implements OnInit {
  @Input() wish!: WishItem; // ! means non-null assertion operator, requires wishText

  /*
    Many different ways to manipulate CSS classes.  Can return string, array, or object.
      array: return this.fulfilled ? ['strikeout', 'text-muted'] : '';
  */
  get cssClasses() {
    // if wish completed, return 'strikeout' CSS class & Bootstrap's text-muted, else do nothing
    return { 'strikeout text-muted': this.wish.isCompleted }; // object CSS representation
  }

  // WishlistItem component relies on dependency: default "events" property
  constructor(private events: EventService) {}

  ngOnInit(): void {}

  // Event Service
  removeWish() {
    this.events.emit('removeWish', this.wish);
  }

  toggleFulfilled() {
    // toggle isCompleted property
    this.wish.isCompleted = !this.wish.isCompleted;
    // this.fulfilledChange.emit(this.fulfilled);
  }
}

// @Input() fulfilled!: boolean; // Input 2 way binding
// @Output() fulfilledChange = new EventEmitter<boolean>(); // Output 2 way binding
