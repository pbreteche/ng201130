import { Component } from '@angular/core';
import { Contact } from '../fixtures/contacts';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.scss']
})
export class ContactCreateComponent {
  newContact: Contact = { username: '', email: ''};
}
