import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignerPage } from './signer';

@NgModule({
  declarations: [
    SignerPage,
  ],
  imports: [
    IonicPageModule.forChild(SignerPage),
  ]
})
export class SignerPageModule {}
