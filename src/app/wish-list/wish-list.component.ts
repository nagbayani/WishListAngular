import { Component, OnInit, Input } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem'; // import WishItem class

@Component({
  selector: 'wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css'],
})
export class WishListComponent implements OnInit {
  // receive items to display from parent component AppComponent
  @Input() wishes: WishItem[] = [];
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    console.log('WISHES', this.wishes);
  }
}
