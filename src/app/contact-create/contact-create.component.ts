import { Component } from '@angular/core';
import {Contact, CONTACTS} from '../fixtures/contacts';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.scss']
})
export class ContactCreateComponent {
  newContact: Contact = { id: null, username: '', email: '', memberSince: '', agency: null};

  add(): void {
    CONTACTS.push(this.newContact);
    this.newContact = { id: null, username: '', email: '', memberSince: '', agency: null};
  }
}
