import { Component } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';
import { EventService } from 'src/shared/models/services/EventService'; // import events service
import { WishService } from 'src/app/wish/wish.service'; // import wish service

@Component({
  selector: 'app-wish',
  templateUrl: './wish.component.html',
  styleUrls: ['./wish.component.css'],
})
export class WishComponent {
  //q: what is the syntax of !
  //a: ! is the non-null assertion operator, it tells the compiler to not worry about the variable being null or undefined
  items: WishItem[] = [];

  // INJECTING SERVICES INTO CONSTRUCTOR
  // don't need to clarify "events" as "private" since we are using events in constructor directly
  constructor(events: EventService, private wishService: WishService) {
    events.listen('removeWish', (wish: any) => {
      let index = this.items.indexOf(wish);
      this.items.splice(index, 1);
    });
  }

  // On 1st initialization, getWishes() is called, retrieves the list of wishes from the JSON file, and assigns it to the items array for display
  ngOnInit(): void {
    // 2 arguments for subscribe(), 1st is callback function, 2nd is error function
    this.wishService.getWishes().subscribe(
      (data: any) => {
        this.items = data;
      },
      (error: any) => {
        alert(error.message);
      }
    );
  }

  // passed to filter method on Items array to determine which items to display
  filter: any;
}
