import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import {RestProvider} from '../../providers/rest/rest';

import {Storage} from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';
import { LoginUserPage } from '../login-user/login-user';
import {App} from 'ionic-angular';
// import {DatePicker} from '@ionic-native/date-picker';

/**
 * Generated class for the RecordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-record',
  templateUrl: 'record.html',
})
export class RecordPage {
transectionReposnse : any;
  
constructor(public appCtrl : App, public statusBar : StatusBar, public navCtrl : NavController, public navParams : NavParams, public loadingCtrl : LoadingController, public db : RestProvider, public storage : Storage) {
  }
ionViewWillLoad(){
    this.statusBar.styleDefault();
  }
logout(){ this.storage.set('user', null);
 this.appCtrl.getRootNav().setRoot(LoginUserPage);
}
ionViewDidLoad() {
    this.statusBar.styleDefault();
    let loading = this.loadingCtrl.create({spinner: 'dots' });
    loading.present();
    this.storage.get('user').then((val) => {
      var obj = {
        UserId : val,
        TranscationSource:'all',
      }
    this.db.transcationDetails(obj).subscribe(data => {
    this.transectionReposnse = (JSON.parse(data.json()));
      }, err => console.error("Error in Record Page"+err.message), () => {
        loading.dismiss();
      });
    });
  }
}

