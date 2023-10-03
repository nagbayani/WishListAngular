import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // import HttpClientModule, built in HTTP client module

import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import { WishListItemComponent } from './wish-list-item/wish-list-item.component';
import { WishService } from 'src/app/wish/wish.service';
import { WishComponent } from 'src/app/wish/wish.component'; // import wish service

@NgModule({
  declarations: [
    WishListComponent,
    AddWishFormComponent,
    WishFilterComponent,
    WishListItemComponent,
    WishComponent,
  ],
  imports: [
    CommonModule,
    FormsModule, // access to ngModel
    HttpClientModule, // access to HttpClient],
  ],
  exports: [WishComponent],
  //q: what is providers for
  //a: providers are objects that can be injected to components of this module
  providers: [WishService],
})
export class WishModule {}
