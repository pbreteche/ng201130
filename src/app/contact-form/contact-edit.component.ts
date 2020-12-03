import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AbstractContactForm} from './abstract-contact-form';
import {ContactListService} from '../contact-list.service';

@Component({
  selector: 'app-contact-edit',
  templateUrl: 'contact-form.component.html',
  styleUrls: ['contact-form.component.scss']
})
export class ContactEditComponent extends AbstractContactForm implements OnInit {
  currentId: number;
  submitText = 'Mettre à jour';

  constructor(
    private activatedRoute: ActivatedRoute,
    private contactList: ContactListService
  ) {
    super();
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(map => {
      this.currentId = +map.get('id');
      /*
      const contact = this.contactList.find(this.currentId);
      this.form.get('username').setValue(contact.username);
      this.form.get('email').setValue(contact.email);
      this.form.get('memberSince').setValue(contact.memberSince);
      this.form.get('agency').setValue(contact.agency);
       */
    });
  }

  save(): void {
    /*
    const contact = this.contactList.find(this.currentId);
    contact.username = this.form.get('username').value;
    contact.email = this.form.get('email').value;
    contact.memberSince = this.form.get('memberSince').value;
    contact.agency = this.form.get('agency').value;
     */
  }
}
