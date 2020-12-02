import { Component } from '@angular/core';
import {Contact, CONTACTS} from '../fixtures/contacts';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent {
  contact: Contact = CONTACTS[0];
}
