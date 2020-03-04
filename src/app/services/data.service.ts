import { Injectable } from '@angular/core';
import { Contact, ContactCategory } from '../models/contact';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public contacts: Contact[] = [
    {
      firstName: 'Beatriz',
      lastName: "Aragon",
      id: 1,
      phone: '+598 99123123',
      email: 'contact@ionicthemes.com',
      category: ContactCategory.FAMILY
    },
    {
      firstName: 'Marcelo',
      lastName: "Graus",
      id: 2,
      phone: '+598 99123123',
      email: 'contact@ionicthemes.com',
      category: ContactCategory.FRIEND
    },
    {
      firstName: 'Miguel',
      lastName: "Pera",
      id: 3,
      phone: '+598 99123123',
      email: 'contact@ionicthemes.com',
      category: ContactCategory.FAMILY
    },
    {
      firstName: 'Dayana',
      lastName: "Arroz",
      id: 4,
      phone: '+598 99123123',
      email: 'contact@ionicthemes.com',
      category: ContactCategory.FRIEND
    },
    {
      firstName: 'Luis',
      lastName: "Pou",
      id: 5,
      phone: '+598 99123123',
      email: 'contact@ionicthemes.com',
      category: ContactCategory.FRIEND
    }
  ]

  private lastId: number = 5;

  constructor(private router: Router) {}

  getContacts(): Contact[] {
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

  updateContact(contact: Contact) {
    let itemIndex = this.contacts.findIndex(item => item.id == contact.id);
    this.contacts[itemIndex] = contact;

    this.router.navigate(['/home']);
  }
}
