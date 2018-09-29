import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, MenuController } from 'ionic-angular';
import {RestProvider} from '../../providers/rest/rest';
import {Storage} from '@ionic/storage';
// import {WalletPage} from '../../pages/wallet/wallet';
import {TabmasterPage} from '../../pages/tabmaster/tabmaster';
import { SignupPage } from '../signup/signup';
import { PassResetPage } from '../pass-reset/pass-reset';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignerPage } from '../signer/signer';
import { StatusBar } from '@ionic-native/status-bar';
/**
 * Generated class for the LoginUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login-user',
  templateUrl: 'login-user.html',
})
export class LoginUserPage {
  hide = true;
  name: any;
  profilePicPath: any;
  lastName: any;
  firstName: any;
  userName: any;
  emailId: any;
  moNo: any;
  Loginresponce: any;
  private formSubmitAttempt: boolean;
id:any;
loginForm;

constructor(public statusBar : StatusBar,public fb : FormBuilder, public navCtrl : NavController, public menu : MenuController,
   public loadingCtrl : LoadingController, public navParams : NavParams, public db : RestProvider, 
   public storage : Storage) {
this.menu.swipeEnable(false);
this.loginForm = FormGroup;
this.loginForm = fb.group({
  'loginid' : [null, Validators.compose([Validators.required])],
  'upassword' : [null, Validators.compose([Validators.required])]
});

}



isFieldInvalid(field: string) { 
  return (
(!this.loginForm.get(field).valid && this.loginForm.get(field).touched) ||
(this.loginForm.get(field).untouched && this.formSubmitAttempt)
  );
}

ionViewWillEnter() {
  this
    .menu
    .enable(false, 'yourmenu');
  // this.nav.swipeBackEnabled = false;
}
ionViewWillLoad(){
    this.statusBar.styleDefault();
  }
  ionViewDidLoad() {
this.menu.swipeEnable(false);
this.statusBar.styleDefault();
  }

forG(){
this.navCtrl.push(SignerPage);
this.navCtrl.setRoot(SignerPage);
}

signup(){
  this.navCtrl.push(SignupPage);
  // alert("hi")
}

loginhandler(){
  if(this.loginForm.valid){
    this.formSubmitAttempt = true;  
    let loading = this.loadingCtrl.create({spinner: 'dots'});
  loading.present();
  var obj = {
    LoginId: this.loginForm.value.loginid,
    Password: this.loginForm.value.upassword,
  }
  this.db.loginUser(obj).subscribe(data => {
  this.Loginresponce =JSON.parse(data.json());
    if (this.Loginresponce.flag == 'true') {
      this.storage.set('user',this.Loginresponce.UserId);
      this.storage.set('mono',this.Loginresponce.MobileNo);
      this.storage.set('name',this.Loginresponce.Name);
      this.storage.set('emailId',this.Loginresponce.EmailId);
      this.storage.set('userName',this.Loginresponce.UserName);
      this.storage.set('firstName',this.Loginresponce.FirstName);
      this.storage.set('lastName',this.Loginresponce.LastName);
      this.storage.set('profilePicPath',this.Loginresponce.ProfilePicPath);
      this.navCtrl.push(TabmasterPage);
      this.navCtrl.setRoot(TabmasterPage);
  }
  else{
      alert(this.Loginresponce.Message);
}

  }, err => console.error("Error in Login Page" + err.message), () => {
    loading.dismiss();
    
  });
  }
  else{
    alert('Please enter your login details.')
  }

}

passwordType: string = 'password';
 passwordIcon: string = 'eye-off';
 hideShowPassword() {
     this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
     this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
 }

}
