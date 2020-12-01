import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CONTACTS} from '../fixtures/contacts';

@Component({
  selector: 'app-contact-create-reactive',
  templateUrl: './contact-create-reactive.component.html',
  styleUrls: ['./contact-create-reactive.component.scss']
})
export class ContactCreateReactiveComponent {
  createForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl('')
  });

  add(): void {
    CONTACTS.push(this.createForm.value);
    this.createForm.reset();
  }
}
