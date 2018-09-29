webpackJsonp([3],{

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetotpPageModule", function() { return GetotpPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getotp__ = __webpack_require__(320);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GetotpPageModule = /** @class */ (function () {
    function GetotpPageModule() {
    }
    GetotpPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__getotp__["a" /* GetotpPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__getotp__["a" /* GetotpPage */]),
            ],
        })
    ], GetotpPageModule);
    return GetotpPageModule;
}());

//# sourceMappingURL=getotp.module.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetotpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(14);
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
 * Generated class for the GetotpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GetotpPage = /** @class */ (function () {
    function GetotpPage(navCtrl, navParams, statusBar) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.statusBar = statusBar;
    }
    GetotpPage.prototype.ionViewDidLoad = function () {
        this.statusBar.styleDefault();
    };
    GetotpPage.prototype.ionViewWillLoad = function () {
        this.statusBar.styleDefault();
    };
    GetotpPage.prototype.verifyOtp = function () {
        this.navCtrl.parent.select(2);
    };
    GetotpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-getotp',template:/*ion-inline-start:"/Users/rohitshukla/Desktop/new/flipprr/src/pages/getotp/getotp.html"*/'<ion-content class="login-content" padding>\n  <ion-row class="logo-row">\n    <ion-col></ion-col>\n    <ion-col width-87>\n      <!-- <img src="assets/imgs/flpr.png" /> -->\n    </ion-col>\n    <ion-col></ion-col>\n  </ion-row>\n  <div class="login-box">\n    <!-- <form (ngSubmit)="login()" #registerForm="ngForm"> -->\n    <ion-row>\n      <ion-col>\n        <ion-list inset>\n          <ion-item>\n            <ion-input type="number" placeholder="Enter your OTP" name="mono" required></ion-input>\n          </ion-item>\n\n          <ion-item>\n              <!-- <ion-input type="password" placeholder="Password" name="password"  required></ion-input> -->\n            </ion-item>\n\n        </ion-list>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class="signup-col">\n        <button ion-button class="submit-btn" full type="submit" (click)="verifyOtp();"round style="color: rgb(109, 154, 255);">Verify Otp</button>\n        <!-- <button ion-button class="register-btn" block clear (click)="createAccount()">Create New Account</button> -->\n      </ion-col>\n    </ion-row>\n\n    <!-- </form> -->\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/rohitshukla/Desktop/new/flipprr/src/pages/getotp/getotp.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]])
    ], GetotpPage);
    return GetotpPage;
}());

//# sourceMappingURL=getotp.js.map

/***/ })

});
//# sourceMappingURL=3.js.map