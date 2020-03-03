import { Injectable } from '@angular/core';
import { Contact, ContactCategory } from '../models/contact';

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
    },
  ]

  constructor() { }

  getContacts(): Contact[] {
    return this.contacts;
  }

  getContactsByCategory(category: string): Contact[] {
    return this.contacts.filter(x => x.category == category);
  }

  getContactById(id: number): Contact {
    return this.contacts.find(contact => contact.id == id);
  }
}
