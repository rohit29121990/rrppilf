import { Component } from '@angular/core';
import {NavController, LoadingController, MenuController} from 'ionic-angular';
import {LoginUserPage} from '../../pages/login-user/login-user';
import {SignupPage} from '../signup/signup';
import { TabmasterPage } from '../tabmaster/tabmaster';
import {Storage} from '@ionic/storage';
import {StatusBar} from '@ionic-native/status-bar';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

constructor(public screenOrientation : ScreenOrientation,private statusBar : StatusBar, public navCtrl : NavController,
  public menu : MenuController,public loadingCtrl : LoadingController, public storage : Storage) 
  {
     this.statusBar.backgroundColorByHexString('#00B2E5');
    // this.statusBar.overlaysWebView(true);
    this.statusBar.styleDefault();
    this.menu.swipeEnable(false);
  }
signup(){
  this.navCtrl.push(SignupPage);
}
ionViewWillLoad(){
    this.statusBar.styleDefault();
  }


ionViewDidLoad(){
//  this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
     this.statusBar.styleDefault();
   this.statusBar.styleDefault();
this.storage.get('user').then((val) => {
    // console.log('Your age is', val);
if (val!=null) {
this
  .navCtrl
  .push(TabmasterPage);
this
  .navCtrl
  .setRoot(TabmasterPage);
    }
    else{
// console.log(val+"null hai ");
    }
  });
// if(this.block.blockA !=""){
  // alert(this.block.blockA)
// this
//   .navCtrl
//   .push(TabmasterPage);
// this
//   .navCtrl
//   .setRoot(TabmasterPage);
// }else{
// alert("sorry");
// }
}
openFilters() {
this
  .navCtrl
  .push(LoginUserPage);
}
}
