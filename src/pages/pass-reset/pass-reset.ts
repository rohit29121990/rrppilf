import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RestProvider} from '../../providers/rest/rest';
import { LoginUserPage } from '../login-user/login-user';
import { StatusBar } from '@ionic-native/status-bar';
/**
 * Generated class for the PassResetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pass-reset',
  templateUrl: 'pass-reset.html',
})
export class PassResetPage {
otpid : any;
otp : any;
private passA:any;
private passB:any;
  UserData: any;
private monor:any;
private otpr : any;
public verifiedpass : string;
constructor(public navCtrl : NavController, public statusBar : StatusBar, public navParams : NavParams, public db : RestProvider) {
  }

ionViewWillLoad(){
    this.statusBar.styleDefault();
  }

  ionViewDidLoad() {
        this.statusBar.styleDefault();
  }

OtpSender(){
this
  .db
  .forgotPasswordmaster({LoginId: this.monor})
  .subscribe(data => {
    this.UserData = JSON.parse(data.json());
    this.otpid = this.UserData.OTPId;
    this.otp = this.UserData.OTP;
    if (this.UserData.flag.toLowerCase() == 'true') {} else {
      alert(this.UserData.Message);
    }
    // spinner
  }, (error) => {
    // spinner
    alert("This user name is not register with us");
  });
}

Passverifier() {
if (this.passA==this.passB) {
this.verifiedpass= this.passA;
    alert("Password verified");
} else{
this.verifiedpass =null;
    alert("Password not same..");
}
}

ChnagePassword() {

    if (this.otp != this.otpr) {
      alert("OTP does not match");
    } else {
      const obj = {
        UserId: this.UserData.UserId,
        OTPId: this.UserData.OTPId,
        OTP : this.otpr,
        Password : this.verifiedpass,
      }
if (this.passA == this.passB) {
      this.db.changePassword(obj)
        .subscribe(data => {
          this.UserData = JSON.parse(data.json());
          if (this.UserData.flag.toLowerCase() == 'true') {
            alert("Password successfully changed!!!");
            this.navCtrl.push(LoginUserPage);
          } else {
            alert(this.UserData.Message);
          }
// spinner
        }, (error) => {
// spinner
          alert("This user name is not register with us");
        });
      } else {
        alert("Password and Confirm Password is not same..");
      }
    }
  

}
}






