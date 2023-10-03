import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { WishModule } from './wish/wish.module';
import { ContactModule } from './contact/contact.module';

/*
  This is the root module of our application. Defines everything our application requires in order to run.
*/

// need to declare components so that they have access to ngModule
@NgModule({
  declarations: [AppComponent], // set of components / directives that belong to this module
  imports: [BrowserModule, WishModule, ContactModule], // set of modules that we want to make available to the templates of components that belong to this module
  providers: [], // objects that can be injected to components of this module
  bootstrap: [AppComponent], // entry point of this module (app.component)
})
export class AppModule {}
