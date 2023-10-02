// Observable ,   Subject allows us to emulate typical events, so we have multiple objects subscribe to our Observable Object (issue an event, multiple objects listen for that event)
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

// this class can be injected into other classes
@Injectable({
  // declare where we want to provide this event service
  providedIn: 'root',
})
export class EventService {
  // pass messages from observerable object to subscriber object
  private subject = new Subject();

  /*
  anytime we emit an event -> USE next() method
  pass in object with (eventName, payload) that we want subscriber to work with
  whatever object subscribes to this event, will get this object with properties eventName and payload
  */
  emit(eventName: string, payload: any) {
    this.subject.next({ eventName, payload });
  }

  /*
  objects uses .ASOBSERVABLE() method to subscribe for events
  subscribe function accepts callback function that accepts whatever we pass to next() method 
  emit event, next method executes, passes in object, object passed to callback function for subscribe method
  */
  listen(eventName: string, callback: (event: any) => void) {
    this.subject.asObservable().subscribe((nextObj: any) => {
      if (eventName === nextObj.eventName) {
        callback(nextObj.payload);
      }
    });
  }
  /*
  object that emits event, calls subject's next method, passes in event Object, object listens for event uses subject's asObservable method that gives access to subscribe method, object that is going to subscribe will receive this event object, check if event name is the same as was provided to listen method, if so execute callback function, pass in payload property of event object
  */
}

// exporting an object, that we import inside wish-list component and app component
// using this object to listen for removeWish event, and emit removeWish event
