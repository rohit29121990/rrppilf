webpackJsonp([0],{

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SweetAlertPageModule", function() { return SweetAlertPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sweet_alert__ = __webpack_require__(323);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SweetAlertPageModule = /** @class */ (function () {
    function SweetAlertPageModule() {
    }
    SweetAlertPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sweet_alert__["a" /* SweetAlertPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sweet_alert__["a" /* SweetAlertPage */]),
            ],
        })
    ], SweetAlertPageModule);
    return SweetAlertPageModule;
}());

//# sourceMappingURL=sweet-alert.module.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SweetAlertPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__ = __webpack_require__(119);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the SweetAlertPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SweetAlertPage = /** @class */ (function () {
    function SweetAlertPage(statusBar, db, navParams, view, sanitize, socialSharing) {
        this.statusBar = statusBar;
        this.db = db;
        this.navParams = navParams;
        this.view = view;
        this.sanitize = sanitize;
        this.socialSharing = socialSharing;
        this.inviteNo = "";
        this.btntxt = 'continue';
        this.invite = false;
        this.link = "www.google.com";
        this.iframeshow = false;
        this.bal = 0;
        this.balflag = false;
        this.btnflag = false;
        this
            .statusBar
            .styleDefault();
        var data = this.navParams.get('data');
        this.pageName = data.page;
        if (data.flag == 'true')
            this.flag = true;
        else if (data.flag == 'false')
            this.flag = false;
        else
            this.flag = data.flag;
        this.responseData = data.mydata;
        this.invite = false;
        this.btntxt = 'continue';
        if (this.pageName == 'addmoney' && this.flag == true) {
            this.iframeshow = true;
            this.urlpaste = sanitize.bypassSecurityTrustResourceUrl(this.db.paymentUrl + this.responseData.TranscationId);
        }
        else {
            this.btnflag = this.flag;
            if (this.flag == true) {
                this.headlines = 'hurray!';
                if (this.pageName == 'Vaddmoney') {
                    this.Message = 'your voucher has been successfully redeemed.';
                    this.bal = this.responseData.AvailableBalance;
                    if (this.bal > 0)
                        this.balflag = true;
                }
                else if (this.pageName == 'sendmoney') {
                    this.Message = 'money has been successfully transferred with the reference no : ' + this.responseData.TranscationId;
                    this.bal = this.responseData.AvailableBalance;
                    if (this.bal > -1)
                        this.balflag = true;
                }
                else if (this.pageName == 'requestmoney') {
                    this.Message = 'money request has been successfully generated.';
                    // this.balflag=true;
                    // this.btntxt = 'invite';
                }
                else if (this.pageName == 'profile') {
                    this.Message = 'profile has been successfully updated.';
                    this.balflag = true;
                }
                else if (this.pageName == 'inviter') {
                    this.Message = 'profile has been successfully updated.';
                    // this.balflag=true;
                }
            }
            else {
                this.headlines = 'oops!!';
                if (this.pageName == 'validation')
                    this.Message = this.responseData;
                else if (this.pageName == 'invite') {
                    this.btntxt = 'invite';
                    this.invite = true;
                    this.Message = "this number is not registered with us , so its a great time to invite !!";
                    this.inviteNo = this.responseData;
                    // this.balflag=false;
                }
                else
                    this.Message = this.responseData.Message;
            }
        }
    }
    SweetAlertPage.prototype.sucessAlert = function () {
        if (this.pageName == 'invite') {
            this.socialSharing.share(this.inviteNo, this.subject, this.file, this.link).then(function () { }).catch(function () { });
        }
    };
    SweetAlertPage.prototype.ionViewWillEnter = function () {
        this
            .statusBar
            .styleDefault();
    };
    SweetAlertPage.prototype.ionViewDidLoad = function () {
        this
            .statusBar
            .styleDefault();
    };
    SweetAlertPage.prototype.closealert = function () {
        var data = {
            notification: 'money uploded',
            reactions: 'behappy'
        };
        this.view.dismiss(data);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], SweetAlertPage.prototype, "nav", void 0);
    SweetAlertPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sweet-alert',template:/*ion-inline-start:"/Users/rohitshukla/Desktop/new/flipprr/src/pages/sweet-alert/sweet-alert.html"*/'\n\n\n<ion-content>\n<iframe height="100%" width="100%" [src]="urlpaste" *ngIf="iframeshow"></iframe>\n<div *ngIf="!iframeshow" padding>\n    <div>\n        <div class="hhh">{{headlines}}</div>\n          <div class="iii">\n            <p>{{Message}}</p>\n            <p *ngIf="balflag">Your new balance is {{bal | currency :\'&#8377;\'}}</p>\n          </div>\n      </div>\n      \n      <!-- <button   style="font-size:150%" round outline block style="border-color: #080502;\n            color: #030201;\n            background-color: transparent;font-size: 150%;\n            margin-top: 45%;\n            transition: none;" (click)="closealert();">try again</button> -->\n\n<button *ngIf="!btnflag" ion-button full color="light" round class="login" style="color: blue;transition: none;height:50px;font-size: 150%;"\n    (click)="closealert();">\n    try again</button>\n\n    <button *ngIf="!btnflag" ion-button full color="light" round class="login" style="color: blue;transition: none;height:50px;font-size: 150%;"\n        (click)="sucessAlert();">{{btntxt}}</button>\n\n<!-- \n        <button  *ngIf="btnflag" ion-button color="primary" style="font-size:150%" round outline block style="border-color: #080502;\n            color: #030201;\n            background-color: transparent;font-size: 150%;\n            margin-top: 45%;\n            transition: none;" (click)="sucessAlert();">Continue</button> -->\n</div>\n</ion-content>\n'/*ion-inline-end:"/Users/rohitshukla/Desktop/new/flipprr/src/pages/sweet-alert/sweet-alert.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__["a" /* SocialSharing */]])
    ], SweetAlertPage);
    return SweetAlertPage;
}());

//# sourceMappingURL=sweet-alert.js.map

/***/ })

});
//# sourceMappingURL=0.js.map