import { Component } from '@angular/core';
import {IonicPage, NavController, ModalController, LoadingController, NavParams} from 'ionic-angular';
import {RestProvider} from '../../providers/rest/rest';
import {Storage} from '@ionic/storage';
import {DomSanitizer} from '@angular/platform-browser';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import { LoginUserPage } from '../login-user/login-user';
import {App} from 'ionic-angular';
/**
 * Generated class for the AccountsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-accounts',
  templateUrl: 'accounts.html',
})
export class AccountsPage {

  notificationReposnse: any;
  uid:any;
constructor(public appCtrl : App, private model : ModalController, private sanitize : DomSanitizer, public navCtrl : NavController,
  public db : RestProvider, public storage : Storage, public loadingCtrl : LoadingController, 
  public navParams : NavParams,public fb:FormBuilder) {
       
  }

   logout(){ this.storage.set('user', null);
 this.appCtrl.getRootNav().setRoot(LoginUserPage);
}

  ionViewDidLoad() {

this.requestSender();
  }
requestSender(){
   let loading = this.loadingCtrl.create({spinner: 'dots'});  
  loading.present();
    this.storage.get('user').then((val) => {
        this.uid=val;
      var obj = {
        UserId : val,
      }
    this.db.getNotification(obj).subscribe(data => {
this.notificationReposnse = (JSON.parse(data.json())).lstMoneyRequestNotificationDetails;
      }, err => console.error("Error in Record Page"+err.message), () => {
        // loading.dismiss();
      });
    });
    loading.dismiss();
}


AcceptRequest(RequestRowData) {
  let loading = this.loadingCtrl.create({spinner: 'dots'});  
  loading.present();
  const obj = {
    UserId : this.uid,
    TranscationSourceId: 2,
    Amount: RequestRowData.Amount,
    PatnerUserId: RequestRowData.PartnerId,
    MsgDescription: '',
    RequestId: RequestRowData.RequestId,
    RewardId: 0
  }
  this.db.transcationManagement(obj).subscribe(data => {
      if (JSON.parse(data.json()).flag.toLowerCase() == 'true') {
loading.dismiss();
alert('Transection Successfull.Transection Id:' + JSON.parse(data.json()).TranscationId + ' & Now Available amount:' + JSON.parse(data.json()).AvailableBalance);
// spinner

      } else {

        alert('Error on transfer Moeny !'+JSON.parse(data.json()).Message);
      }

    }, err => {

    }, () => {

    });
}

RejectRequest(RequestRowData) {
  let loading = this.loadingCtrl.create({spinner: 'dots'});  
  loading.present();
  const obj = {
    RequesterId : this.uid,
    RequestToId: RequestRowData.PartnerId,
    Amount: RequestRowData.Amount,
    MsgDescription: '',
    RequestId: RequestRowData.RequestId
  }
  this
    .db
    .transcationManagementRequestMoney(obj)
    .subscribe(data => {
      if (JSON.parse(data.json()).flag.toLowerCase() == 'true') {
      loading.dismiss();
      alert('Request Canceled!!!!');
      } else {
      loading.dismiss();
        alert('Error on reject money request !'+JSON.parse(data.json()).Message);
      }

    }, err => {

    }, () => {

    });
}

}



