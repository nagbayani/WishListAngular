/*
  Reactive Form - FormControl Objects
*/

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'; // reactive form
import { createInvalidDomainValidator } from 'src/app/contact/invalidEmailDomain'; // custom validator

const invalidEmailDomain = createInvalidDomainValidator([
  'aol.com',
  'hotmail.com',
]);

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  contactForm = new FormGroup({
    // bind these objects to form fields in Template
    //FormControl takes 3 arguments: initial value, validators, and async validators
    senderName: new FormControl('', Validators.required),
    senderEmail: new FormControl('', [
      Validators.required,
      Validators.email,
      invalidEmailDomain,
    ]), // email has to have valid syntax
    senderMessage: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]), //message has to be at least 10 characters
  });

  submitForm() {
    console.log(this.contactForm.valid);
    // if (this.senderEmailControl.dirty) {
    //   alert('you changed the name field');
    // }
  }
}
