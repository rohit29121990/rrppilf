import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SweetAlertPage } from './sweet-alert';

@NgModule({
  declarations: [
    SweetAlertPage,
  ],
  imports: [
    IonicPageModule.forChild(SweetAlertPage),
  ],
})
export class SweetAlertPageModule {}
