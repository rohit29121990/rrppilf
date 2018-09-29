import {Component} from '@angular/core';
import {IonicPage,NavController,NavParams,ModalController,Modal,LoadingController} from 'ionic-angular';
import {RestProvider} from '../../providers/rest/rest';
import {Storage} from '@ionic/storage';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {StatusBar} from '@ionic-native/status-bar';

@IonicPage()
@Component({selector: 'page-vaddmoney', templateUrl: 'vaddmoney.html'})
export class VaddmoneyPage {
  RewardId : any;
  TransferTo : any;
  private vamt : string;
  UserId : any;
  SendValidateCode : any
  RewardsValidate : any;
  addmoneyForm;
  private formSubmitAttempt : boolean;
  constructor(public statusBar : StatusBar, public navCtrl : NavController, public db : RestProvider, public navParams : NavParams, public storage : Storage, public loadingCtrl : LoadingController, public fb : FormBuilder) {
    this
      .statusBar
      .styleDefault();
    this.addmoneyForm = FormGroup;
    this.addmoneyForm = fb.group({
      'amt': [
        null, Validators.compose([
          Validators.required, Validators.pattern(/^([a-zA-Z0-9_-]){8,8}$/)
        ])
      ]
    });

  }
  ionViewWillEnter() {
    this
      .statusBar
      .styleDefault();
  }
  ionViewDidLoad() {
    this
      .statusBar
      .styleDefault();
  }
  isFieldInvalid(field : string) {
    return ((!this.addmoneyForm.get(field).valid && this.addmoneyForm.get(field).touched) || (this.addmoneyForm.get(field).untouched && this.formSubmitAttempt));
  }

  Vaddmoney() {
    if (this.addmoneyForm.valid) {
      if (this.RewardId || 0 != 0) {
        let loading = this
          .loadingCtrl
.create({spinner: 'dots' });
        loading.present();
        this
          .storage
          .get('user')
          .then((val) => {
            this.UserId = val;
            const obj = {
              UserId: this.UserId,
              RewardId: this.RewardId
            }
            this
              .db
              .addRewardMoney(obj)
              .subscribe(data => {
                this
                  .db
                  .TransectionPage(JSON.parse(data.json()).flag.toLowerCase(), 'Vaddmoney', JSON.parse(data.json()));
                this.RewardId = 0;
              }, err => console.error(err.message), () => {
                loading.dismiss();
                this.RewardId = 0;
              });
          });
      } else {
        this
          .db
          .TransectionPage(false, 'validation', 'invalid voucher code');
      }
    } else {
      alert("Enter a valid detail")
    }

  }

  Vvelidator() {
    this
      .storage
      .get('user')
      .then((val) => {
        this.UserId = val;
        if ((this.vamt.length) == 8) {
          let loading = this
            .loadingCtrl
.create({spinner: 'dots' });
          loading.present();
          this
            .db
            .validateRewardCode({UserId: this.UserId, RewardCode: this.vamt})
            .subscribe(data => {
              this.RewardsValidate = JSON.parse(data.json());
              if (this.RewardsValidate.flag.toLowerCase() != 'true') {

                alert(this.RewardsValidate.Message);
              } else {
                this.RewardId = this.RewardsValidate.RewardId;
                alert("You will get " + this.RewardsValidate.RewardAmount + " reward.");
              }
              // this.spinner.hide();
            }, err => console.error(err.message), () => {
              loading.dismiss();
            });
        }
      });
  }

}
