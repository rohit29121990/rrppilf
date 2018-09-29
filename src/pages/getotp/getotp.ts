import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';

/**
 * Generated class for the GetotpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-getotp',
  templateUrl: 'getotp.html',
})
export class GetotpPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public statusBar:StatusBar) {
  }

  ionViewDidLoad() {
this.statusBar.styleDefault();
  }
   ionViewWillLoad() {
this.statusBar.styleDefault();
  }

verifyOtp(){
  this.navCtrl.parent.select(2);
}
}
