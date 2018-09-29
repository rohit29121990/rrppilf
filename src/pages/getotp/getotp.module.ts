import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GetotpPage } from './getotp';

@NgModule({
  declarations: [
    GetotpPage,
  ],
  imports: [
    IonicPageModule.forChild(GetotpPage),
  ],
})
export class GetotpPageModule {}
