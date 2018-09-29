import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the SignerPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signer',
  templateUrl: 'signer.html'
})
export class SignerPage {

  inputnoRoot = 'InputnoPage'
  getotpRoot = 'GetotpPage'
  resetpassRoot = 'ResetpassPage'


  constructor(public navCtrl: NavController) {}

}
