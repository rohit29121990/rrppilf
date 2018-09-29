import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController ,ModalController, Modal,AlertController} from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import {Storage} from '@ionic/storage';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { StatusBar } from '@ionic-native/status-bar';
import {SocialSharing} from '@ionic-native/social-sharing';
/**
 * Generated class for the SendPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-send',
  templateUrl: 'send.html',
})
export class SendPage {
TransferTo : any;
private samt : string;
private mono : string;
UserId : any;
SendValidateCode : any
sendmoneyForm;
private formSubmitAttempt: boolean;
subject:any=null;
file:any=null;
link:any="www.google.com";
recieverName:any=null;

constructor(public alertCtrl : AlertController,public navCtrl : NavController, public socialSharing : SocialSharing, public db : RestProvider, private model : ModalController,
  public navParams : NavParams, public storage : Storage,public loadingCtrl : LoadingController,
public fb : FormBuilder,public statusBar : StatusBar) {
  
    this.sendmoneyForm = FormGroup;
    this.sendmoneyForm = fb.group({
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

  ionViewWillLoad(){
    this.statusBar.styleDefault();
  }

ionViewDidLoad(){
    this.statusBar.styleDefault();
  }

  isFieldInvalid(field: string) { 
    return (
  (!this.sendmoneyForm.get(field).valid && this.sendmoneyForm.get(field).touched) ||
  (this.sendmoneyForm.get(field).untouched  && this.formSubmitAttempt)
    );
  }

velidator() {
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

sendbtn() {
  
this.storage.get('user').then((val) => {
    this.UserId = val;
    this.SendMoneyReward();
  });

}

SendMoneyReward() {
  if (this.sendmoneyForm.valid) {
    if ((this.TransferTo.UserId || 0) != 0) {
      if(this.UserId!=this.TransferTo.UserId){
        if(parseFloat(this.samt)>0){
            this.formSubmitAttempt=true;
          let loading = this.loadingCtrl.create({spinner: 'dots' });
          loading.present();
          const obj = {
            UserId: this.UserId,
            TranscationSourceId: 2,
            Amount : this.samt,
            PatnerUserId: this.TransferTo.UserId,
            MsgDescription: '',
            RequestId: 0,
            RewardId: 0
          }
          this.db.transcationManagement(obj).subscribe(data => {
          
          this.db.TransectionPage(JSON.parse(data.json()).flag.toLowerCase(),'sendmoney', JSON.parse(data.json()));
          }, err => console.error(err.message), () => {
            loading.dismiss();
          });
        }
        else{
          this.db.TransectionPage(false,'validation','amount must be greater than zero.');
        }
      }
      else{
        this.db.TransectionPage(false,'validation','you cannot send money to yourself.');
      }
  
      
    } 
    else {
      this.db.TransectionPage(false,'validation','enter a valid user detail');
    }
    
  }
  else {
    alert("Please enter a valid detail.");
  }
  
}

}
