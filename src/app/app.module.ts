import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import { WishListItemComponent } from './wish-list-item/wish-list-item.component';

// import { EventService } from './../shared/models/services/EventService';
/*
  This is the root module of our application. Defines everything our application requires in order to run.
*/

// need to declare components so that they have access to ngModule
@NgModule({
  // set of components / directives that belong to this module
  declarations: [
    AppComponent,
    WishListComponent,
    AddWishFormComponent,
    WishFilterComponent,
    WishListItemComponent,
  ],

  // set of modules that we want to make available to the templates of components that belong to this module
  imports: [
    BrowserModule,
    FormsModule, // access to ngModel
  ],
  providers: [], // objects that can be injected to components of this module
  bootstrap: [AppComponent], // entry point of this module (app.component)
})
export class AppModule {}
