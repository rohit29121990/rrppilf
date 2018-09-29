import {Component, ViewChild} from '@angular/core';
import {Platform, Nav, Config} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
 import {WalletPage} from '../pages/wallet/wallet';
import {HomePage} from '../pages/home/home';
import {LoginUserPage} from '../pages/login-user/login-user';
import {TabmasterPage} from '../pages/tabmaster/tabmaster';
import {timer} from 'rxjs/observable/timer';
import {RecordPage} from '../pages/record/record';
import {AccountsPage} from '../pages/accounts/accounts';
import {ShopingPage} from '../pages/shoping/shoping';
import {Storage} from '@ionic/storage';
import {Keyboard} from '@ionic-native/keyboard';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = HomePage;


  showSplash=true;
constructor(public platform : Platform, public config : Config, public keyboard : Keyboard, public statusBar : StatusBar, public storage : Storage, public splashScreen : SplashScreen) {
this.splashScreen.hide();
  this.initializeApp();
this.splashScreen.hide();
}

initializeApp() {
     
  this.splashScreen.hide();
  this.platform.ready().then(() => {
    // this.keyboard.disableScroll(false);
// this.keyboard.hideKeyboardAccessoryBar(true);

    this.splashScreen.hide();
      this.statusBar.styleDefault();
        timer(30).subscribe(()=>this.showSplash=false)
    });
}
sideWallet(){
this.nav.push(WalletPage);
// this.nav.setRoot(TabmasterPage);
}
record(){
this.nav.push(RecordPage);
// this.nav.setRoot(TabmasterPage);
}

rooter(){
this.nav.push(TabmasterPage);
// this.nav.setRoot(TabmasterPage);
}
 recorder(){
   this.nav.push(RecordPage);
  //  this.nav.setRoot(TabmasterPage);
 }

profiler() {
  this.nav.push(ShopingPage);
  // this.nav.setRoot(TabmasterPage);
}
notifier() {
  this.nav.push(AccountsPage);
  // this.nav.setRoot(TabmasterPage);
}

logout(){
this
  .nav
  .push(LoginUserPage);
this
  .nav
  .setRoot(LoginUserPage);
 this.storage.set('user',null);
}
// openPage(page) {
//   // Reset the content nav to have just this page we wouldn't want the back button
//   // to show in this scenario
//   this
//     .nav
//     .setRoot(page.component);
// }
}