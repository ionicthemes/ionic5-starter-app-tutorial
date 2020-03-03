import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactDetailsPageRoutingModule } from './contact-details-routing.module';

import { ContactDetailsPage } from './contact-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactDetailsPageRoutingModule
  ],
  declarations: [ContactDetailsPage]
})
export class ContactDetailsPageModule {}
