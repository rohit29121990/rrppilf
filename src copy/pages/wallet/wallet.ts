import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';
import {SendPage} from '../send/send'
import {RequestPage} from '../request/request';
import {AddmoneyPage} from '../addmoney/addmoney';
import {VaddmoneyPage} from '../vaddmoney/vaddmoney';
import {RestProvider} from '../../providers/rest/rest';
import {Storage} from '@ionic/storage';
import {StatusBar} from '@ionic-native/status-bar';
import {LoginUserPage} from '../login-user/login-user';
import {App} from 'ionic-angular';
@IonicPage()
@Component({selector: 'page-wallet', templateUrl: 'wallet.html'})
export class WalletPage {
  accountbalance : any;
  rewardbalance : any;
  transectionReposnse : string;
  bal : number;
  readonly : boolean;
  availableBalanceResponce : any[];
constructor(public appCtrl : App,public statusBar : StatusBar, public navCtrl : NavController, public loadingCtrl : LoadingController,
    public navParams : NavParams, public db : RestProvider, public storage : Storage) {
      // this.screenOrientation.unlock();
      this.statusBar.styleDefault();
    this.readonly = true
  }

  vadd() {this.navCtrl.push(VaddmoneyPage);}

  
logout(){
  this.storage.set('user', null);
 this.appCtrl.getRootNav().setRoot(LoginUserPage);
   
}

  ionViewDidLoad() {
    this.requestSender();
     this.statusBar.styleDefault();
  }
  ionViewWillEnter(){
     this.statusBar.styleDefault();
  }
  doRefresh(refresher) {
    console.log('Begin operation', refresher);
    this.ionViewDidLoad();
    setTimeout(() => {
      console.log('operation has ended');
      refresher.complete();
    }, 2000);
  }

  requestSender() {
    this
      .storage
      .get('user')
      .then((val) => {
        var obj = {
          UserId: val
        }
        let loading = this
          .loadingCtrl
          .create({spinner: 'dots',});
        loading.present();
        this
          .db
          .availableBalance(obj)
          .subscribe(data => {
            this.accountbalance = JSON
              .parse(data.json())
              .AvailableBalance;
            this.rewardbalance = JSON
              .parse(data.json())
              .RewardBalance;
            this.bal = (parseFloat(this.accountbalance) + parseFloat(this.rewardbalance));
          }, err => console.error("Error in Record Page" + err.message), () => {
            loading.dismiss();
          });
      });
  }

  requestsend() {
    let loading = this
      .loadingCtrl
.create({spinner: 'dots' , duration: 2000});
    loading.present();
    this
      .navCtrl
      .push(RequestPage);
  }

  moneysend() {
    let loading = this
      .loadingCtrl
.create({spinner: 'dots' , duration: 2000});
    loading.present();
    this
      .navCtrl
      .push(SendPage);
  }

  addmoney() {this.navCtrl.push(AddmoneyPage);}


}
