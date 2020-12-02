import { Component } from '@angular/core';
import {CONTACTS} from '../fixtures/contacts';
import {AbstractContactForm} from './abstract-contact-form';

@Component({
  selector: 'app-contact-create-reactive',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactCreateComponent extends AbstractContactForm {
  submitText = 'Ajouter';

  save(): void {
    CONTACTS.push(this.form.value);
    this.form.reset();
  }
}
