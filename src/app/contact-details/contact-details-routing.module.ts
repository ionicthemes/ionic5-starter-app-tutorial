import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactDetailsPage } from './contact-details.page';

const routes: Routes = [
  {
    path: '',
    component: ContactDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactDetailsPageRoutingModule {}
