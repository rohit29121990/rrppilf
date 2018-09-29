import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {RecordPage} from '../../pages/record/record';
import { Keyboard } from '@ionic-native/keyboard';

/**
 * Generated class for the TabmasterPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabmaster',
  templateUrl: 'tabmaster.html'
})
export class TabmasterPage {

  
  recordRoot = 'RecordPage'
  shopingRoot = 'ShopingPage'
  accountsRoot = 'AccountsPage'
  paymentRoot = 'PaymentPage'
  walletRoot = 'WalletPage'

constructor(public navCtrl : NavController, public keyboard : Keyboard) {}
    ionViewDidEnter(){
    //  Keyboard.onKeyboardShow().subscribe(()=>{this.valueforngif=false})
    //  Keyboard.onKeyboardHide().subscribe(()=>{this.valueforngif=true})
}

}


