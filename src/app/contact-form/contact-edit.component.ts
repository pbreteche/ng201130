import { Component, OnInit } from '@angular/core';
import {CONTACTS} from '../fixtures/contacts';
import {ActivatedRoute} from '@angular/router';
import {AbstractContactForm} from './abstract-contact-form';

@Component({
  selector: 'app-contact-edit',
  templateUrl: 'contact-create-reactive.component.html',
  styleUrls: ['contact-create-reactive.component.scss']
})
export class ContactEditComponent extends AbstractContactForm implements OnInit {
  currentId: number;

  constructor(private activatedRoute: ActivatedRoute) {
    super();
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(map => {
      this.currentId = +map.get('id');
      const contact = CONTACTS[this.currentId - 1];
      this.createForm.get('username').setValue(contact.username);
      this.createForm.get('email').setValue(contact.email);
      this.createForm.get('memberSince').setValue(contact.memberSince);
      this.createForm.get('agency').setValue(contact.agency);
    });
  }

  add(): void {
    CONTACTS[this.currentId - 1].username = this.createForm.get('username').value;
    CONTACTS[this.currentId - 1].email = this.createForm.get('email').value;
    CONTACTS[this.currentId - 1].memberSince = this.createForm.get('memberSince').value;
    CONTACTS[this.currentId - 1].agency = this.createForm.get('agency').value;
  }
}
