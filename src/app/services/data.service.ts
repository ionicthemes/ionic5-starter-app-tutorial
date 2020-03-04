import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public contacts: Contact[];

  private lastId: number = 19;

  constructor(private http: HttpClient) {
    this.http.get<Contact[]>('./assets/contacts.json')
    .subscribe((contacts: Contact[]) => {
      this.contacts = contacts;
    });
  }

  getContacts() {
    return this.contacts;
  }

  getContactsByCategory(category: string): Contact[] {
    return this.contacts.filter(x => x.category == category);
  }

  getContactById(id: number): Contact {
    return this.contacts.find(contact => contact.id == id);
  }

  createContact(contact: Contact) {
    contact.id = this.lastId + 1;
    // increment lastId value
    this.lastId = this.lastId + 1;
    this.contacts.push(contact);
  }

  updateContact(contact: Contact): Contact {
    let itemIndex = this.contacts.findIndex(item => item.id == contact.id);
    this.contacts[itemIndex] = contact;
    return contact;
  }

  deleteContact(id: number): Contact {
    let itemIndex = this.contacts.findIndex(item => item.id == id);
    return this.contacts.splice(itemIndex, 1)[0];
  }
}
