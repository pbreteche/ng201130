import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

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
}
