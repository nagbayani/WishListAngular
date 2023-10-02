import { Component, OnInit, Output, EventEmitter } from '@angular/core'; // import Output and EventEmitter, Output for outputting events, EventEmitter for emitting events
import { WishItem } from 'src/shared/models/wishItem'; // import WishItem class

@Component({
  selector: 'add-wish-form',
  templateUrl: './add-wish-form.component.html',
  styleUrls: ['./add-wish-form.component.css'],
})
export class AddWishFormComponent {
  // When we emit addWish event, we want to pass in a WishItem object, Updates
  @Output() addWish = new EventEmitter<WishItem>(); // declare addWish property, set its type to EventEmitter, set its generic type to WishItem

  constructor() {}

  ngOnInit(): void {}

  // declare newWishText property
  newWishText = '';

  addNewWish() {
    // todo: add new wish to items array in App.component.ts
    // emit addWish event, pass in new WishItem object
    this.addWish.emit(new WishItem(this.newWishText)); // App.component will receive this event and add the new wish to its items array
    console.log(this.newWishText);
    // clear the textbox
    this.newWishText = '';
  }
}
