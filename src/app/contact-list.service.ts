import { Injectable } from '@angular/core';
import {Contact, NEXT_ID} from './fixtures/contacts';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactListService {
  private subject = new BehaviorSubject<Contact[]>([]);
  contacts = [];
  nextId = NEXT_ID;

  constructor(private http: HttpClient) {
    this.fetch();
  }

  fetch(): void {
    this.http.get('assets/contacts.json').subscribe(
      (contacts: Contact[]) => {
        this.contacts = contacts;
        this.subject.next(this.contacts);
      }
    );
  }

  get data(): Observable<Contact[]> {
    return this.subject.asObservable();
  }

  find(id: number): Observable<Contact|null> {
    return this.subject.pipe(
      map(contacts => contacts.find(c => c.id === +id))
    );
  }

  insert(contact: Contact): void {
    contact.id = this.nextId++;
    this.contacts.push(contact);
  }
}
