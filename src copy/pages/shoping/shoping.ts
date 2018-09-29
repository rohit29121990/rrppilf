import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';
import {RestProvider} from '../../providers/rest/rest';
import {Storage} from '@ionic/storage';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { StatusBar } from '@ionic-native/status-bar';
import { LoginUserPage } from '../login-user/login-user';
import { SignerPage } from '../signer/signer';
import {App} from 'ionic-angular';
import {Keyboard} from '@ionic-native/keyboard';

@IonicPage()
@Component({selector: 'page-shoping', templateUrl: 'shoping.html'})
export class ShopingPage  {
  DefaultImg = '../../../assets/images/users/avatar.png';
  profileImage = '';
  UserData : any;
  UserId : any;
  UserDetails : ILoginData;
  EmailId : string;
  MobileNo : string;
  LastName : string;
  FirstName : string;
  LoginId : string;
  profileForm;
  private formSubmitAttempt: boolean;
constructor(public keyboard : Keyboard, public appCtrl : App, public navCtrl : NavController, public storage : Storage, public statusBar : StatusBar, public db : RestProvider,
  public loadingCtrl : LoadingController,public navParams : NavParams,public fb:FormBuilder) {
      this.profileForm = FormGroup;
      this.profileForm = fb.group({
        'fname': [null, Validators.compose([
          Validators.required
        ])],
        'lname': [null, Validators.compose([
          Validators.required
        ])],
        'emid' : [null, Validators.compose([
          Validators.required,
          Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/)
        ])]
      }); 
      this.requestSender();
  }
  
  logout(){ this.storage.set('user', null);
 this.appCtrl.getRootNav().setRoot(LoginUserPage);
}
  ionViewWillLoad(){
    this.statusBar.styleDefault();
  }
cp(){
this.navCtrl.push(SignerPage);
}
ionViewDidLoad(){
    this.statusBar.styleDefault();
  }

  isFieldInvalid(field: string) { 
    return (
  (!this.profileForm.get(field).valid && this.profileForm.get(field).touched) ||
  (this.profileForm.get(field).untouched  && this.formSubmitAttempt)
    );
  }
 
vvv(){
  this.keyboard.show();
}
  requestSender() {
    this.storage.get('mono').then((val) => {
      this.UserId = val;
      const obj = {
        LoginId: this.UserId
      }
      let loading = this.loadingCtrl.create({spinner: 'dots' });
      loading.present();
      this.db.getProfileByLogin(obj).subscribe(data => {
          this.UserDetails = JSON.parse(data.json());
          if (this.UserDetails.ProfilePicPath == '') 
            this.profileImage = this.DefaultImg;
          else 
            this.profileImage = this.db.imageUrl + this.UserDetails.ProfilePicPath;
            
            this.LoginId=this.UserDetails.UserName;
            this.MobileNo=this.UserDetails.MobileNo;
            this.FirstName=this.UserDetails.FirstName;
            this.LastName=this.UserDetails.LastName;
            this.EmailId=this.UserDetails.EmailId;
        }, err => console.error("Error in Record Page" + err.message), () => {
          loading.dismiss();
        });
    });

  }

  UpdateProfile() {
    if(this.profileForm.valid){
      this.formSubmitAttempt=true;
        const fd = new FormData();
    fd.append('ProfilePicPath', "");
    fd.append('FirstName', this.FirstName);
    fd.append('LastName', this.LastName);
    fd.append('EmailId', this.EmailId);
    fd.append('MobileNo', this.MobileNo);
    fd.append('LoginId', this.LoginId);
    fd.append('UserId', this.UserDetails.UserId);
    let loading = this.loadingCtrl.create({spinner: 'dots' });
    loading.present();
    this.db.UpdateProfile(fd).subscribe(data => {
        if (JSON.parse(data.json()).flag.toLowerCase() == 'true') {
         this.db.TransectionPage(true, 'profile',"Profile updated successfully");
          // alert("Profile updated successfully");
        } else {
         
          alert(JSON.parse(data.json()).Message);
        }
      }, (error) => {
      
        alert("Unable to process");

      }, () => {
        loading.dismiss();
      });
      }
      else{
        alert('Please enter all profile details.')
      }
  }
}

export interface ILoginData {
  flag : string;
  Message : string;
  EmailId : string;
  MobileNo : string;
  Name : string;
  UserName : string;
  UserId : string;
  FirstName : string;
  LastName : string;
  ProfilePicPath : string;
}
