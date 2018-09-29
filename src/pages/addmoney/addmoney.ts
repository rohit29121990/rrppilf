 import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ModalController, Modal, LoadingController} from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {RestProvider} from '../../providers/rest/rest';
import {DomSanitizer} from '@angular/platform-browser';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
/**
 * Generated class for the AddmoneyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addmoney',
  templateUrl: 'addmoney.html',
})
export class AddmoneyPage {
private amt : string;
UserId:any;
input:any;
RewardId:any;
url : any;
urlpaste:any;
addmoneyForm;
private formSubmitAttempt: boolean;
constructor(private model : ModalController,private sanitize : DomSanitizer, 
  public navCtrl : NavController, public db : RestProvider, public navParams : NavParams, 
  public storage : Storage,public loadingCtrl : LoadingController,
  public fb:FormBuilder) {
    this.addmoneyForm = FormGroup;
    this.addmoneyForm = fb.group({
      'amt' : [null, Validators.compose([
        Validators.required,
        Validators.pattern(/^(\d{1,5}|\d{1,5}\.\d{0,2})$/)
      ])]
    }); 
  }

  isFieldInvalid(field: string) { 
    return (
  (!this.addmoneyForm.get(field).valid && this.addmoneyForm.get(field).touched) ||
  (this.addmoneyForm.get(field).untouched  && this.formSubmitAttempt)
    );
  }

  ionViewDidLoad() {
      
  }

  showAlert(){
  this.storage.get('user').then((val) => {
  this.UserId=val;
  this.AddMoneyReward();
    });
  }

  TransectionPage(){
    const myDate={
      mydata:this.urlpaste,
      page:'addmoney'
    }
    const myModel=this.model.create('SweetAlertPage',{data:myDate});
    myModel.present();
  }

  AddMoneyReward() {
    if (this.addmoneyForm.valid) {
      if(parseFloat(this.amt)>0){
        const obj = {
          UserId: this.UserId,
          TranscationSourceId: 1,
          Amount: this.amt,
          PatnerUserId: 0,
          MsgDescription: '',
          RequestId: 0,
          RewardId: this.RewardId
        }
        this.formSubmitAttempt=true;
        this.db.transcationManagement(obj).subscribe(data => {
            this.db.TransectionPage(JSON.parse(data.json()).flag.toLowerCase(),'addmoney', JSON.parse(data.json()));
            this.RewardId = 0;
    
          }, err => console.error(err.message), () => {
            this.RewardId = 0;
    
          });
      }
      else{
        this.db.TransectionPage(false,'validation','amount must be greater than zero.');
      }
    }
    else{
      alert("Enter a valid detail")
    }
  }

}







