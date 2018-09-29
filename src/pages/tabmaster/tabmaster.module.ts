import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabmasterPage } from './tabmaster';

@NgModule({
  declarations: [
    TabmasterPage,
  ],
  imports: [
    IonicPageModule.forChild(TabmasterPage),
  ]
})
export class TabmasterPageModule {}
