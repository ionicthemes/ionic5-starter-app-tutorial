import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Contact } from '../models/contact';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { NewContactPage } from '../new-contact/new-contact.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public contacts: Contact[];

  constructor(
    private dataService: DataService,
    public modalController: ModalController,
    private routerOutlet: IonRouterOutlet
  ) {
    this.contacts = this.dataService.getContacts();
  }

  filterContacts(ev: any) {
    let selectedCategory = ev.detail.value;

    if(selectedCategory === 'All'){
      this.contacts = this.dataService.getContacts();
    } else {
      this.contacts = this.dataService.getContactsByCategory(selectedCategory);
    }
  }


  async openNewContactModal() {
    const modal = await this.modalController.create({
      component: NewContactPage,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl
    });
    return await modal.present();
  }
}
