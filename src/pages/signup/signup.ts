import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController, LoadingController} from 'ionic-angular';
import {LoginUserPage} from '../login-user/login-user';
import {RestProvider} from '../../providers/rest/rest';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StatusBar } from '@ionic-native/status-bar';
import {Keyboard} from '@ionic-native/keyboard';
import { Http } from '@angular/http';
import {Observable, Subject, ReplaySubject} from 'rxjs';
import {map, filter, switchMap} from 'rxjs/operators';
@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
posts: any[];
data:any;
btnResendOTP: boolean;
UserData: any;
otpid: any;
clientotp : any;
serverOtp:any;
geneUserResponce : any;
signupForm;
TC:boolean;
uservariable="user name"
// currencyList = ['INR', 'GBP', 'USD', 'NZD'];
// cc='IN';

// Ccode:any []=[91,92,593,20,503,240,291,372,251,500,298,679,358,33,594,689,241,220,995,49,233,350,30,299,1473,590,1671,502,224,245,592,509,379,504,852,36,354,62,98,964,353,972,39,1876,81,962,16,77,254,686,850];
private formSubmitAttempt: boolean;
constructor(private keyboard : Keyboard,public http:Http, public statusBar : StatusBar, 
  public fb : FormBuilder, public loadingCtrl : LoadingController,
  public navCtrl : NavController, public navParams : NavParams, public db : RestProvider, public alertCtrl : AlertController) {
  this.getdata();
  this.statusBar.styleDefault();
  this.signupForm = fb.group({
    
    'userg' : [null, Validators.compose([
      Validators.required,
      Validators.pattern(/^([a-zA-Z0-9_-]){6,}$/)
    ])],
    'monog' : [null, Validators.compose([
      Validators.required,
// Validators.pattern(/^[0-9]{10}$/)
 Validators.pattern(/^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/)
    ])],
    'passg' : [null, Validators.compose([
      Validators.required,
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\.*])(?=.{6,})/)
    ])],
    'cpassg' : [null, Validators.compose([
      Validators.required,
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\.*])(?=.{6,})/)
    ])],
'Remember' : [
  null, Validators.compose([
    Validators.required, Validators.compose([])
  ])
],
  }); 
}
changer(){
if (this.TC == true){

}
else{
alert(false)
}
  
}
useralert(){
this.uservariable = "must be 6 alpha-numeric character"
}
isFieldInvalid(field: string) { 
  return (
(!this.signupForm.get(field).valid && this.signupForm.get(field).touched) ||
(this.signupForm.get(field).untouched  && this.formSubmitAttempt)
  );
}
ionViewWillEnter() {
 this.statusBar.styleDefault();
}

  ionViewDidLoad() {
this.statusBar.styleDefault();
    this.TC=false;
    
  }

doPrompt() {
const prompt = this
  .alertCtrl
  .create({
    title: 'Otp Verification',
    message: "Enter your Otp ",

    inputs: [
      {
        name: 'otp',
        placeholder: 'Otp..',
      
      },
      
    ],
    
    buttons: [
{
  text: 'Cancel',
  handler: data => {
    // console.log('Cancel clicked');
  }
}, 
{
  text: 'Resend',
  handler: data => {
this.ResendOTP();
  }
}, 
{
        text: 'Save',
        handler: data => {
        this.clientotp = data.otp;
          this.ValidateOTP();
        }
        
      }
    ]
  });

prompt.present();
}


login(){
this
  .navCtrl
.push(LoginUserPage);
}

signup(){
  if(this.TC==false){
    alert('Term & Cnditions must be accepted.');
    return;
  }else{
if(this.signupForm.valid){
  
  let loading = this.loadingCtrl.create({spinner: 'dots ' });
  loading.present();
  var obj = {
    Name:'',
    Email:'',

UserName : this.signupForm.value.userg,
  MobileNo : this.signupForm.value.monog,
  Password: this.signupForm.value.passg
  }
  this.formSubmitAttempt = true;  
  this.db.generateUser(obj).subscribe(data => {
      this.geneUserResponce = JSON.parse(data.json());
      this.otpid = this.geneUserResponce.OTPId;
      this.serverOtp = this.geneUserResponce.OTP;
      if (this.geneUserResponce.flag.toLowerCase() == 'true'){
              this.doPrompt();
          }
          else{
          alert(this.geneUserResponce.Message);
          if (this.geneUserResponce.Message == 'Your Mobile no verification is pending.'){
              this.doPrompt();
          }
          }
    }, err => console.error("Error in Record Page" + err.message), () => {
      // alert("error found");
      loading.dismiss();
    });
}
  }


}

ValidateOTP() {
if (this.serverOtp != this.clientotp) {
      // this.btnResendOTP = true;
      this.doPrompt();
      alert("OTP is not matched.");
    } else {
      const obj = {
        OTPId: this.otpid,
        OTP:this.clientotp
      }
this.db.loginService(obj)
        .subscribe(data => {
          this.UserData = JSON.parse(data.json());
          if (this.UserData.flag.toLowerCase() == 'true') {
            this.navCtrl.push(LoginUserPage);
          } else {
             this.doPrompt();
            alert(this.UserData.Message);
          }
        }, (error) => {
         alert("OTP is not matched.");
        });
    }
   }

ResendOTP() {
this.db
.resendOTP({
  OTPId: this.otpid})
    .subscribe(data => {
      this.UserData = JSON.parse(data.json());
this.serverOtp = this.UserData.OTP;
      if (this.UserData.flag.toLowerCase() == 'true') {
        alert("OTP send successfully.");
       
      this.doPrompt();

        this.btnResendOTP = false;
      } else {
      alert(this.UserData.Message);
      }
    }, (error) => {
alert("This user name is not register with us");
    });
}

getdata(){
 this.http.get("assets/data/con.json")
.subscribe(res =>{
    this.data=Array.of(res.json());
    this.posts= this.data[0];
console.log("data is here" + this.posts);
}, error =>{
    console.log(error);

});
}

}


