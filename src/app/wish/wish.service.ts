import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { WishItem } from 'src/shared/models/wishItem';
import { catchError, throwError } from 'rxjs'; // import catchError operator

/*
  We can use this service inside of the app component to listen for events, and emit events.
  This service fetches data from JSON File
*/

@Injectable({
  providedIn: 'root',
})
export class WishService {
  // INJECTING HTTPCLIENT INTO CONSTRUCTOR
  constructor(private http: HttpClient) {}

  private getStandardOptions(): any {
    return {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        // can provide an authorization token here
      }),
    };
  }

  // GET request - retrieving wishes data
  getWishes() {
    let options = this.getStandardOptions();

    // can specify params for request
    options.params = new HttpParams({
      // create URL parameters from this object, where property names are URL parameter names, and property values are URL parameter values
      fromObject: {
        format: 'json',
      },
    });
    /*
    able to specify format we want data in (can set to JSON, XML, etc.)
    return this.http.get('assets/wishes.json?format=json', options);
    */
    // returns observable object, when we subscribe to it, request is now sent
    return this.http
      .get('assets/wishes.json', options)
      .pipe(catchError(this.handleError)); //pipe() method allows us to chain operators, catchError() operator catches errors
  }

  // error handling function
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error(
        `There is an issue with the client or network: ${error.error}`
      );
    } else {
      console.error(
        `Server-side error: ${error.status}, body was: ${error.error}`
      );
    }
    return throwError(
      () =>
        new Error(`Cannot retrieve wishes from the server. Please try again`)
    );
  }

  // POST request - updating server with new wish
  // private so we can't call this method outside of class
  private addWish(wish: WishItem) {
    let options = this.getStandardOptions();

    // want some kind of authorization since we are updating data on server, headers object is immutable, so we need to create a new one
    options.headers = options.headers.set(
      'Authorization',
      'value-need-for-authorization'
    );
    this.http.post('assets/wishes.json', wish, options);
  }
}
