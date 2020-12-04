import { Component } from '@angular/core';
import { Contact } from '../fixtures/contacts';
import { ContactListService } from '../contact-list.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-contact-nav',
  templateUrl: './contact-nav.component.html',
  styleUrls: ['./contact-nav.component.scss']
})
export class ContactNavComponent {
  contacts: Observable<Contact[]>;

  constructor(listService: ContactListService) {
    this.contacts = listService.data;
  }
}
