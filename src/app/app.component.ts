import { Component } from '@angular/core';
import { CONTACTS } from './fixtures/contacts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng201130';
  contact = CONTACTS[0];
}
