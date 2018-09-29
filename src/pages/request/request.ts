import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {RestProvider} from '../../providers/rest/rest';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StatusBar } from '@ionic-native/status-bar';
/**
 * Generated class for the RequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-request',
  templateUrl: 'request.html',
})
export class RequestPage {
  TransferTo: any;
private ramt : string;
private mono : string;
UserId:any;
SendValidateCode:any
recieverName : any = null;
requestmoneyForm;
private formSubmitAttempt: boolean;
constructor(public navCtrl : NavController, public db : RestProvider, public statusBar : StatusBar,
  public navParams : NavParams, public storage : Storage,public loadingCtrl : LoadingController,
  public fb:FormBuilder) {
    this.requestmoneyForm = FormGroup;
    this.requestmoneyForm = fb.group({
      'amt' : [null, Validators.compose([
        Validators.required,
        Validators.pattern(/^(\d{1,5}|\d{1,5}\.\d{0,2})$/)
      ])],
      'udt' : [null, Validators.compose([
        Validators.required,
        Validators.pattern(/^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/)
      ])]
    }); 
  }

  isFieldInvalid(field: string) { 
    return (
  (!this.requestmoneyForm.get(field).valid && this.requestmoneyForm.get(field).touched) ||
  (this.requestmoneyForm.get(field).untouched  && this.formSubmitAttempt)
    );
  }

   ionViewWillLoad(){
    this.statusBar.styleDefault();
  }

ionViewDidLoad(){
    this.statusBar.styleDefault();
  }
requesterbtn(){
this.requestSender();
}
  requestSender(){
    this.storage.get('user').then((val) => {
      this.UserId = val;
    });
    this.requester();
  }

  requester(){
    if (this.requestmoneyForm.valid) {
      if ((this.TransferTo.UserId || 0) != 0) {
        if(this.UserId!=this.TransferTo.UserId){
          if(parseFloat(this.ramt)>0){
            this.formSubmitAttempt=true;
            let loading = this.loadingCtrl.create({spinner: 'dots' });
            loading.present();
            const obj = {
              RequesterId: this.UserId,
              RequestToId:this.TransferTo.UserId,
              Amount: this.ramt,
              MsgDescription :''
            }
            this.db.transcationManagementRequestMoney(obj).subscribe(data => {
              if (JSON.parse(data.json()).flag.toLowerCase() == 'true') {
                this.db.TransectionPage(true, 'requestmoney',this.mono);
              } else {
                alert(JSON.parse(data.json()).Message);
              }
              
            }, err => console.error(err.message), () => {
              loading.dismiss();
              
            });
          }
          else{
            alert("Amount must be greater than zero.");
          }
        }
        else{
          alert("You cannot request money to yourself.");
        }
      } 
      else {
        alert("Patner user not validate.");
      }
  }
  else {
    alert("Please enter a valid detail.");
  }
}

velidator(){
this.ValidateMobileno(this.mono);
}

ValidateMobileno(MobileNo) {
  if ((MobileNo.length) == 10) {
    let loading = this
      .loadingCtrl
      .create({spinner: 'dots' });
    loading.present();
    const obj = {
      LoginId: MobileNo
    }
    this.db.ValidateProfile(obj).subscribe(data => {
        this.TransferTo = JSON.parse(data.json());
        if (this.TransferTo.flag.toLowerCase() == 'true') {
          this.recieverName = this.TransferTo.UserName;
          this.recieverName = this.recieverName.toUpperCase();
        }else{

     this.db.TransectionPage(false, 'invite',this.mono);

        }
      }, err => console.error(err.message), () => {
        loading.dismiss();
      });
  } else {
    this.SendValidateCode = false;
    this.recieverName = null;
  }
}

}
