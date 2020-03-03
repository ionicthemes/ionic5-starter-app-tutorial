import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.page.html',
  styleUrls: ['./new-contact.page.scss'],
})
export class NewContactPage {

  constructor(private modalController: ModalController) { }

  dismissModal() {
    this.modalController.dismiss();
  }

}
