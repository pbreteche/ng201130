import { Component } from '@angular/core';
import {CONTACTS} from '../fixtures/contacts';
import {AbstractContactForm} from './abstract-contact-form';

@Component({
  selector: 'app-contact-create-reactive',
  templateUrl: './contact-create-reactive.component.html',
  styleUrls: ['./contact-create-reactive.component.scss']
})
export class ContactCreateReactiveComponent extends AbstractContactForm {

  add(): void {
    CONTACTS.push(this.createForm.value);
    this.createForm.reset();
  }
}
