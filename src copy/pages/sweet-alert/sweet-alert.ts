import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavParams ,ViewController, Nav } from 'ionic-angular';
import {DomSanitizer} from '@angular/platform-browser';
import { WalletPage } from '../wallet/wallet';
import { RestProvider } from '../../providers/rest/rest';
import { StatusBar } from '@ionic-native/status-bar';
import {SocialSharing} from '@ionic-native/social-sharing';
/**
 * Generated class for the SweetAlertPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sweet-alert',
  templateUrl: 'sweet-alert.html',
})
export class SweetAlertPage {
inviteNo:string="";
btntxt:string='continue';
invite:boolean=false;
urlpaste : any;
subject:any;
responseData:any;
file:any;
link:any="www.google.com"
pageName:string;
iframeshow:boolean=false;
headlines:string;
Message:string;
flag:boolean;
bal:number=0;
balflag:boolean=false;
btnflag:boolean=false;
constructor(public statusBar : StatusBar, public db : RestProvider, private navParams : NavParams, private view : ViewController,
  private sanitize : DomSanitizer,public socialSharing : SocialSharing) {
this
  .statusBar
  .styleDefault();
  const data=this.navParams.get('data');
  this.pageName=data.page;
  if(data.flag=='true')
    this.flag=true;
  else if(data.flag=='false')
    this.flag=false;
  else
    this.flag=data.flag;

  this.responseData=data.mydata;

this.invite=false;
this.btntxt = 'continue';
    if(this.pageName=='addmoney' &&  this.flag == true){
        this.iframeshow=true;
        this.urlpaste = sanitize.bypassSecurityTrustResourceUrl(this.db.paymentUrl+this.responseData.TranscationId);
    }
    else{
        this.btnflag=this.flag;
        if(this.flag == true){
          
          this.headlines='hurray!';
          if(this.pageName=='Vaddmoney'){
            this.Message='your voucher has been successfully redeemed.';
            this.bal=this.responseData.AvailableBalance;
            if(this.bal>0)
              this.balflag=true;
          }
          else if(this.pageName=='sendmoney'){
            
            this.Message='money has been successfully transferred with the reference no : '+this.responseData.TranscationId;
            this.bal=this.responseData.AvailableBalance;
            if(this.bal>-1)
              this.balflag=true;
          }
          else if(this.pageName=='requestmoney'){
            this.Message='money request has been successfully generated.'
            // this.balflag=true;
            // this.btntxt = 'invite';

          }

        else if (this.pageName == 'profile') {
            this.Message='profile has been successfully updated.' 
            this.balflag = true;
          }
        
        else if (this.pageName == 'inviter') {
            this.Message='profile has been successfully updated.'
            // this.balflag=true;
          }
          
        }
        else {
          this.headlines='oops!!';
          if(this.pageName=='validation')
            this.Message=this.responseData;
            else if(this.pageName=='invite'){
            this.btntxt = 'invite';
            this.invite = true;
            this.Message = "this number is not registered with us , so its a great time to invite !!"
            this.inviteNo=this.responseData
            // this.balflag=false;
          }
          else
            this.Message=this.responseData.Message;
        }
    }
  }

  @ViewChild(Nav) nav: Nav;
  sucessAlert(){
if (this.pageName == 'invite') {
this.socialSharing.share(this.inviteNo,this.subject, this.file, this.link).then(() => {}).catch(()=>{});
    }
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
  closealert() {
    const data={
      notification:'money uploded',
      reactions:'behappy'
    }; 
    this.view.dismiss(data);
  }

}
