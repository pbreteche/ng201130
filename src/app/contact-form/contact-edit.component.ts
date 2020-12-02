import { Component, OnInit } from '@angular/core';
import {CONTACTS} from '../fixtures/contacts';
import {ActivatedRoute} from '@angular/router';
import {AbstractContactForm} from './abstract-contact-form';

@Component({
  selector: 'app-contact-edit',
  templateUrl: 'contact-form.component.html',
  styleUrls: ['contact-form.component.scss']
})
export class ContactEditComponent extends AbstractContactForm implements OnInit {
  currentId: number;
  submitText = 'Mettre à jour';

  constructor(private activatedRoute: ActivatedRoute) {
    super();
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(map => {
      this.currentId = +map.get('id');
      const contact = CONTACTS[this.currentId - 1];
      this.form.get('username').setValue(contact.username);
      this.form.get('email').setValue(contact.email);
      this.form.get('memberSince').setValue(contact.memberSince);
      this.form.get('agency').setValue(contact.agency);
    });
  }

  save(): void {
    CONTACTS[this.currentId - 1].username = this.form.get('username').value;
    CONTACTS[this.currentId - 1].email = this.form.get('email').value;
    CONTACTS[this.currentId - 1].memberSince = this.form.get('memberSince').value;
    CONTACTS[this.currentId - 1].agency = this.form.get('agency').value;
  }
}
