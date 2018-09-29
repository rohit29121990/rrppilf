import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShopingPage } from './shoping';

@NgModule({
  declarations: [
    ShopingPage,
  ],
  imports: [
    IonicPageModule.forChild(ShopingPage),
  ],
})
export class ShopingPageModule {}
