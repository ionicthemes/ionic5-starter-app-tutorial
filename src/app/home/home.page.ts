import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Contact } from '../models/contact';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { NewContactPage } from '../new-contact/new-contact.page';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public contacts: Observable<Contact[]>;
  public currentSegment: string = "All";

  constructor(
    private dataService: DataService,
    public modalController: ModalController,
    private routerOutlet: IonRouterOutlet
  ) {
    this.contacts = this.dataService.getContacts();
  }

  ionViewWillEnter() {
    this.loadContacts(this.currentSegment);
  }

  filterContacts(event: any) {
    let selectedCategory = event.detail.value;
    this.currentSegment = selectedCategory;

    this.loadContacts(selectedCategory);
  }

  loadContacts(category: string) {
    if (category === 'All') {
      this.contacts = this.dataService.getContacts();
    } else {
      this.contacts = this.dataService.getContactsByCategory(category);
    }
  }

  async openNewContactModal() {
    const modal = await this.modalController.create({
      component: NewContactPage,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl
    });

    modal.onWillDismiss().then(() => {
      this.loadContacts(this.currentSegment);
    });

    return await modal.present();
  }
}
