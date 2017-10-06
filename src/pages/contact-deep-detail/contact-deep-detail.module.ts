import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactDeepDetailPage } from './contact-deep-detail';

@NgModule({
  declarations: [
    ContactDeepDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactDeepDetailPage),
  ],
})
export class ContactDeepDetailPageModule {}
