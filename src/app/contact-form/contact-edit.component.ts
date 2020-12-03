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
      const contact = this.contactList.find(this.currentId);
      contact.subscribe(c => {
        this.form.get('username').setValue(c.username);
        this.form.get('email').setValue(c.email);
        this.form.get('memberSince').setValue(c.memberSince);
        this.form.get('agency').setValue(c.agency);
      });
    });
  }

  save(): void {
    this.contactList.update(this.currentId, this.form.value);
    this.form.reset();
  }
}
