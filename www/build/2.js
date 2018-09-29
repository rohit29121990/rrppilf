webpackJsonp([2],{

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputnoPageModule", function() { return InputnoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inputno__ = __webpack_require__(321);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InputnoPageModule = /** @class */ (function () {
    function InputnoPageModule() {
    }
    InputnoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__inputno__["a" /* InputnoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__inputno__["a" /* InputnoPage */]),
            ],
        })
    ], InputnoPageModule);
    return InputnoPageModule;
}());

//# sourceMappingURL=inputno.module.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputnoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signer_signer__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { SignerPageModule } from '../signer/signer.module';


/**
 * Generated class for the InputnoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InputnoPage = /** @class */ (function () {
    function InputnoPage(statusBar, navCtrl, navParams, signerPage) {
        this.statusBar = statusBar;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.signerPage = signerPage;
    }
    InputnoPage.prototype.ionViewWillLoad = function () {
        this.statusBar.styleDefault();
    };
    InputnoPage.prototype.ionViewDidLoad = function () {
        this.statusBar.styleDefault();
        console.log('ionViewDidLoad InputnoPage');
    };
    InputnoPage.prototype.getotp = function () {
        // this.signerPageModule
        this.navCtrl.parent.select(1);
        // this.signerPage.getotpRoot
    };
    InputnoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-inputno',template:/*ion-inline-start:"/Users/rohitshukla/Desktop/new/flipprr/src/pages/inputno/inputno.html"*/'<ion-content class="login-content" padding>\n  <ion-row class="logo-row">\n    <ion-col></ion-col>\n    <ion-col width-87>\n      <!-- <img src="assets/imgs/flpr.png" /> -->\n    </ion-col>\n    <ion-col></ion-col>\n  </ion-row>\n  <div class="login-box">\n    <ion-row>\n      <ion-col>\n        <ion-list inset>\n          <ion-label style="text-align:center;">enter your mobile number below to get otp</ion-label>\n          <ion-item>\n            <ion-input type="number" placeholder="mobile number/user id" name="mono" required></ion-input>\n          </ion-item>\n          <ion-item>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class="signup-col">\n        <button ion-button class="submit-btn" full type="submit" round (click)="getotp();" style="color: rgb(109, 154, 255);">get otp</button>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/rohitshukla/Desktop/new/flipprr/src/pages/inputno/inputno.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__signer_signer__["a" /* SignerPage */]])
    ], InputnoPage);
    return InputnoPage;
}());

//# sourceMappingURL=inputno.js.map

/***/ })

});
//# sourceMappingURL=2.js.map