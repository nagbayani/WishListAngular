import { Component } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';
import { EventService } from 'src/shared/models/services/EventService'; // import events service
//q: can you fix that events import?
//a: yes, you can fix that events import by changing it to import events from './../shared/services/EventService';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  items: WishItem[] = [
    new WishItem('To Learn Angular'),
    new WishItem('Get Coffee', true),
    new WishItem('Find grass that cuts itself'),
  ];

  // don't need private since we are using events in constructor directlt
  constructor(events: EventService) {
    events.listen('removeWish', (wish: any) => {
      let index = this.items.indexOf(wish);
      this.items.splice(index, 1);
    });
  }

  // passed to filter method on Items array to determine which items to display
  filter: any;
}
