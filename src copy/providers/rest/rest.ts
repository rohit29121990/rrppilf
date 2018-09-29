import 'rxjs/add/operator/catch';
import { ModalController } from 'ionic-angular';

import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http'
import {HttpClient} from '@angular/common/http'
import 'rxjs/add/operator/map'

@Injectable(
    //  {providedIn:'root'}
)
export class RestProvider {
  // private apiUrl = 'https://restcountries.eu/rest/v2/all';
public apiUrl = 'http://api.softomation.in/api/user/';
public paymentUrl = 'http://secure.softomation.in/#/ProcessTranscation?TID=';
public imageUrl = 'http://api.softomation.in/api/user/';
arrBirds : string[];
constructor(private model : ModalController, public http : Http) {
    console.log('Hello RestProvider Provider');
  }

// Getdata(obj : {}) {
//     alert("I am service");
//     let apiurl='assets/data/con.json';
//     return this.http.get(apiurl)
//     .map((response:Response)=>{
//     const data = response.json();
//       alert(JSON.Stringify(response));
//       return data;
//     });
//   }


  TransectionPage(flag,page,data){
    const myDate={
      flag:flag,
      mydata: data,
      page:page
    }
    const myModel=this.model.create('SweetAlertPage',{data:myDate});
    myModel.present();
  }
loginUser(objLogin) {
  return this
    .http
    .post(this.apiUrl + 'LoginMaster', objLogin);
    // userid 
}
profiGeter(objProfiler) {
  return this
    .http
    .post(this.apiUrl + 'GetProfileByLogin', objProfiler);
  // userid
}

transcationDetails(objTransection) {
  return this
    .http
.post(this.apiUrl + 'GetTranscationDetails', objTransection);
}

//this  will return ballance in waller
availableBalance(objballance) {
  return this
    .http
.post(this.apiUrl + 'GetAvailableBalance', objballance);
  //  Name,UserName,UserPassword,EmailId,MobileNo
}


profiGeterAll(objProfile) {
  return this
    .http
    .post(this.apiUrl + 'GetAllProfileDetails', objProfile);
  //  Name,UserName,UserPassword,EmailId,MobileNo
}
transcationManagement(objTrans) {
  return this
    .http
.post(this.apiUrl + 'TranscationManagement', objTrans);
  //  Name,UserName,UserPassword,EmailId,MobileNo
}


requestMoney(objTrans) {
  return this
    .http
    .post(this.apiUrl + 'RequestMoney', objTrans);
  //  Name,UserName,UserPassword,EmailId,MobileNo
}

ValidateProfile(objValidateProfile) {
  return this
    .http
    .post(this.apiUrl + 'GetProfileByLogin', objValidateProfile);
}

transcationManagementRequestMoney(objT) {
  return this
    .http
.post(this.apiUrl + 'RequestMoney', objT);
  //  Name,UserName,UserPassword,EmailId,MobileNo
}

validateRewardCode(objRewardCode : {}) {
  return this
    .http
    .post(this.apiUrl + 'ValidateRewardCode', objRewardCode);
}

addRewardMoney(objRewardCode : {}) {
  return this
    .http
    .post(this.apiUrl + 'AddRewardMoney', objRewardCode);
}

generateUser(objRewardCode : {}) {
  return this
    .http
    .post(this.apiUrl + 'GenerateUser', objRewardCode);
}

loginService(objRewardCode : {}) {
  return this
    .http
    .post(this.apiUrl + 'ValidateOTP', objRewardCode);
}
resendOTP(objRewardCode : {}) {
  return this
    .http
    .post(this.apiUrl + 'ResendOTP', objRewardCode);
}

forgotPasswordmaster(objRewardCode : {}) {
  return this
    .http
    .post(this.apiUrl + 'ForgetPassword', objRewardCode);
}

changePassword(objRewardCode : {}) {
  return this
    .http
.post(this.apiUrl + 'ChangePassword', objRewardCode);
}

getProfileByLogin(objRewardCode : {}) {
  return this
    .http
    .post(this.apiUrl + 'GetProfileByLogin', objRewardCode);
}

UpdateProfile(objUpdateProfile : {}) {
  return this
    .http
    .post(this.apiUrl + 'UpdatePersonalDetails', objUpdateProfile);
}

getNotification(objUpdateProfile : {}) {
  return this
    .http
.post(this.apiUrl + 'GetNotification', objUpdateProfile);
}

}

