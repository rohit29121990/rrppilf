import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { SignerPageModule } from '../signer/signer.module';
import { SignerPage } from '../signer/signer';
import { GetotpPage } from '../getotp/getotp';
import { StatusBar } from '@ionic-native/status-bar';

/**
 * Generated class for the InputnoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inputno',
  templateUrl: 'inputno.html',
})
export class InputnoPage {

constructor(public statusBar : StatusBar,public navCtrl : NavController, public navParams : NavParams, public signerPage : SignerPage) {
  }
ionViewWillLoad(){
    this.statusBar.styleDefault();
  }
  ionViewDidLoad() {
     this.statusBar.styleDefault();
    console.log('ionViewDidLoad InputnoPage');
  }
getotp(){
// this.signerPageModule
this.navCtrl.parent.select(1);

// this.signerPage.getotpRoot
}
}
