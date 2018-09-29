import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';

/**
 * Generated class for the ResetpassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resetpass',
  templateUrl: 'resetpass.html',
})
export class ResetpassPage {

constructor(public navCtrl : NavController, public navParams : NavParams, public statusBar : StatusBar) {
  }

   ionViewWillLoad(){
    this.statusBar.styleDefault();
  }

ionViewDidLoad(){
    this.statusBar.styleDefault();
  }

}
