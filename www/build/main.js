webpackJsonp([13],{

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddmoneyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(11);
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
 * Generated class for the AddmoneyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddmoneyPage = /** @class */ (function () {
    function AddmoneyPage(model, sanitize, navCtrl, db, navParams, storage, loadingCtrl, fb) {
        this.model = model;
        this.sanitize = sanitize;
        this.navCtrl = navCtrl;
        this.db = db;
        this.navParams = navParams;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.fb = fb;
        this.addmoneyForm = __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormGroup */];
        this.addmoneyForm = fb.group({
            'amt': [null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_5__angular_forms__["g" /* Validators */].pattern(/^(\d{1,5}|\d{1,5}\.\d{0,2})$/)
                ])]
        });
    }
    AddmoneyPage.prototype.isFieldInvalid = function (field) {
        return ((!this.addmoneyForm.get(field).valid && this.addmoneyForm.get(field).touched) ||
            (this.addmoneyForm.get(field).untouched && this.formSubmitAttempt));
    };
    AddmoneyPage.prototype.ionViewDidLoad = function () {
    };
    AddmoneyPage.prototype.showAlert = function () {
        var _this = this;
        this.storage.get('user').then(function (val) {
            _this.UserId = val;
            _this.AddMoneyReward();
        });
    };
    AddmoneyPage.prototype.TransectionPage = function () {
        var myDate = {
            mydata: this.urlpaste,
            page: 'addmoney'
        };
        var myModel = this.model.create('SweetAlertPage', { data: myDate });
        myModel.present();
    };
    AddmoneyPage.prototype.AddMoneyReward = function () {
        var _this = this;
        if (this.addmoneyForm.valid) {
            if (parseFloat(this.amt) > 0) {
                var obj = {
                    UserId: this.UserId,
                    TranscationSourceId: 1,
                    Amount: this.amt,
                    PatnerUserId: 0,
                    MsgDescription: '',
                    RequestId: 0,
                    RewardId: this.RewardId
                };
                this.formSubmitAttempt = true;
                this.db.transcationManagement(obj).subscribe(function (data) {
                    _this.db.TransectionPage(JSON.parse(data.json()).flag.toLowerCase(), 'addmoney', JSON.parse(data.json()));
                    _this.RewardId = 0;
                }, function (err) { return console.error(err.message); }, function () {
                    _this.RewardId = 0;
                });
            }
            else {
                this.db.TransectionPage(false, 'validation', 'amount must be greater than zero.');
            }
        }
        else {
            alert("Enter a valid detail");
        }
    };
    AddmoneyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addmoney',template:/*ion-inline-start:"/Users/rohitshukla/Desktop/new/flipprr/src/pages/addmoney/addmoney.html"*/'<ion-header no-border>\n  <ion-navbar color="basecolor">\n    <ion-title>Add Money</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <form [formGroup]="addmoneyForm">\n  \n<ion-input [(ngModel)]="amt" [formControl]="addmoneyForm.controls[\'amt\']" placeholder="amount" id="amtm" text-center type="number"\n  style="border-radius: 30px;"></ion-input>\n\n<ion-label *ngIf="isFieldInvalid(\'amt\')">Please enter a valid amount.</ion-label>\n  \n  <button ion-button full color="light" round class="login" style="color: rgb(109, 154, 255);transition: none;height:50px;font-size: 150%;" (click)=\'showAlert();\' [disabled]="!addmoneyForm.valid">continue</button>\n</form>\n</ion-content>\n\n'/*ion-inline-end:"/Users/rohitshukla/Desktop/new/flipprr/src/pages/addmoney/addmoney.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */]])
    ], AddmoneyPage);
    return AddmoneyPage;
}());

//# sourceMappingURL=addmoney.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(14);
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
 * Generated class for the RequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RequestPage = /** @class */ (function () {
    function RequestPage(navCtrl, db, statusBar, navParams, storage, loadingCtrl, fb) {
        this.navCtrl = navCtrl;
        this.db = db;
        this.statusBar = statusBar;
        this.navParams = navParams;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.fb = fb;
        this.recieverName = null;
        this.requestmoneyForm = __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormGroup */];
        this.requestmoneyForm = fb.group({
            'amt': [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].pattern(/^(\d{1,5}|\d{1,5}\.\d{0,2})$/)
                ])],
            'udt': [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].pattern(/^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/)
                ])]
        });
    }
    RequestPage.prototype.isFieldInvalid = function (field) {
        return ((!this.requestmoneyForm.get(field).valid && this.requestmoneyForm.get(field).touched) ||
            (this.requestmoneyForm.get(field).untouched && this.formSubmitAttempt));
    };
    RequestPage.prototype.ionViewWillLoad = function () {
        this.statusBar.styleDefault();
    };
    RequestPage.prototype.ionViewDidLoad = function () {
        this.statusBar.styleDefault();
    };
    RequestPage.prototype.requesterbtn = function () {
        this.requestSender();
    };
    RequestPage.prototype.requestSender = function () {
        var _this = this;
        this.storage.get('user').then(function (val) {
            _this.UserId = val;
        });
        this.requester();
    };
    RequestPage.prototype.requester = function () {
        var _this = this;
        if (this.requestmoneyForm.valid) {
            if ((this.TransferTo.UserId || 0) != 0) {
                if (this.UserId != this.TransferTo.UserId) {
                    if (parseFloat(this.ramt) > 0) {
                        this.formSubmitAttempt = true;
                        var loading_1 = this.loadingCtrl.create({ spinner: 'dots' });
                        loading_1.present();
                        var obj = {
                            RequesterId: this.UserId,
                            RequestToId: this.TransferTo.UserId,
                            Amount: this.ramt,
                            MsgDescription: ''
                        };
                        this.db.transcationManagementRequestMoney(obj).subscribe(function (data) {
                            if (JSON.parse(data.json()).flag.toLowerCase() == 'true') {
                                _this.db.TransectionPage(true, 'requestmoney', _this.mono);
                            }
                            else {
                                alert(JSON.parse(data.json()).Message);
                            }
                        }, function (err) { return console.error(err.message); }, function () {
                            loading_1.dismiss();
                        });
                    }
                    else {
                        alert("Amount must be greater than zero.");
                    }
                }
                else {
                    alert("You cannot request money to yourself.");
                }
            }
            else {
                alert("Patner user not validate.");
            }
        }
        else {
            alert("Please enter a valid detail.");
        }
    };
    RequestPage.prototype.velidator = function () {
        this.ValidateMobileno(this.mono);
    };
    RequestPage.prototype.ValidateMobileno = function (MobileNo) {
        var _this = this;
        if ((MobileNo.length) == 10) {
            var loading_2 = this
                .loadingCtrl
                .create({ spinner: 'dots' });
            loading_2.present();
            var obj = {
                LoginId: MobileNo
            };
            this.db.ValidateProfile(obj).subscribe(function (data) {
                _this.TransferTo = JSON.parse(data.json());
                if (_this.TransferTo.flag.toLowerCase() == 'true') {
                    _this.recieverName = _this.TransferTo.UserName;
                    _this.recieverName = _this.recieverName.toUpperCase();
                }
                else {
                    _this.db.TransectionPage(false, 'invite', _this.mono);
                }
            }, function (err) { return console.error(err.message); }, function () {
                loading_2.dismiss();
            });
        }
        else {
            this.SendValidateCode = false;
            this.recieverName = null;
        }
    };
    RequestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-request',template:/*ion-inline-start:"/Users/rohitshukla/Desktop/new/flipprr/src/pages/request/request.html"*/'<ion-header no-border>\n    <ion-navbar color="basecolor">\n      <ion-title>request money</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n<ion-content padding >\n  <ion-list id="in">\n    <form [formGroup]="requestmoneyForm">\n\n      <ion-input [(ngModel)]="ramt" id="amtm" [formControl]="requestmoneyForm.controls[\'amt\']" text-center type="number" value=""\n        placeholder="amount"></ion-input>\n     \n      <ion-label *ngIf="isFieldInvalid(\'amt\')">please enter a valid amount.</ion-label>\n      <ion-item style="top:2%;">\n        <ion-input [(ngModel)]="mono" [formControl]="requestmoneyForm.controls[\'udt\']" type="number" value="" placeholder="mobile number" (ionChange)=\'velidator();\' style="margin-top: 5%;"></ion-input>\n      </ion-item>\n      <ion-label right style="color:white;">{{recieverName}}</ion-label>\n      <ion-label *ngIf="isFieldInvalid(\'udt\')">please enter a valid mobile number.</ion-label>\n\n\n<button ion-button full color="light" round class="login" style="color: blue;font-size: 150%; margin-top: 30%; transition:\nnone;" (click)="requesterbtn();">request</button>\n\n</form>\n</ion-list>\n\n</ion-content>\n\n\n'/*ion-inline-end:"/Users/rohitshukla/Desktop/new/flipprr/src/pages/request/request.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]])
    ], RequestPage);
    return RequestPage;
}());

//# sourceMappingURL=request.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__ = __webpack_require__(119);
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
 * Generated class for the SendPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SendPage = /** @class */ (function () {
    function SendPage(alertCtrl, navCtrl, socialSharing, db, model, navParams, storage, loadingCtrl, fb, statusBar) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.socialSharing = socialSharing;
        this.db = db;
        this.model = model;
        this.navParams = navParams;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.fb = fb;
        this.statusBar = statusBar;
        this.subject = null;
        this.file = null;
        this.link = "www.google.com";
        this.recieverName = null;
        this.sendmoneyForm = __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormGroup */];
        this.sendmoneyForm = fb.group({
            'amt': [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].pattern(/^(\d{1,5}|\d{1,5}\.\d{0,2})$/)
                ])],
            'udt': [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].pattern(/^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/)
                ])]
        });
    }
    SendPage.prototype.ionViewWillLoad = function () {
        this.statusBar.styleDefault();
    };
    SendPage.prototype.ionViewDidLoad = function () {
        this.statusBar.styleDefault();
    };
    SendPage.prototype.isFieldInvalid = function (field) {
        return ((!this.sendmoneyForm.get(field).valid && this.sendmoneyForm.get(field).touched) ||
            (this.sendmoneyForm.get(field).untouched && this.formSubmitAttempt));
    };
    SendPage.prototype.velidator = function () {
        this.ValidateMobileno(this.mono);
    };
    SendPage.prototype.ValidateMobileno = function (MobileNo) {
        var _this = this;
        if ((MobileNo.length) == 10) {
            var loading_1 = this
                .loadingCtrl
                .create({ spinner: 'dots' });
            loading_1.present();
            var obj = {
                LoginId: MobileNo
            };
            this.db.ValidateProfile(obj).subscribe(function (data) {
                _this.TransferTo = JSON.parse(data.json());
                if (_this.TransferTo.flag.toLowerCase() == 'true') {
                    _this.recieverName = _this.TransferTo.UserName;
                    _this.recieverName = _this.recieverName.toUpperCase();
                }
                else {
                    _this.db.TransectionPage(false, 'invite', _this.mono);
                }
            }, function (err) { return console.error(err.message); }, function () {
                loading_1.dismiss();
            });
        }
        else {
            this.SendValidateCode = false;
            this.recieverName = null;
        }
    };
    SendPage.prototype.sendbtn = function () {
        var _this = this;
        this.storage.get('user').then(function (val) {
            _this.UserId = val;
            _this.SendMoneyReward();
        });
    };
    SendPage.prototype.SendMoneyReward = function () {
        var _this = this;
        if (this.sendmoneyForm.valid) {
            if ((this.TransferTo.UserId || 0) != 0) {
                if (this.UserId != this.TransferTo.UserId) {
                    if (parseFloat(this.samt) > 0) {
                        this.formSubmitAttempt = true;
                        var loading_2 = this.loadingCtrl.create({ spinner: 'dots' });
                        loading_2.present();
                        var obj = {
                            UserId: this.UserId,
                            TranscationSourceId: 2,
                            Amount: this.samt,
                            PatnerUserId: this.TransferTo.UserId,
                            MsgDescription: '',
                            RequestId: 0,
                            RewardId: 0
                        };
                        this.db.transcationManagement(obj).subscribe(function (data) {
                            _this.db.TransectionPage(JSON.parse(data.json()).flag.toLowerCase(), 'sendmoney', JSON.parse(data.json()));
                        }, function (err) { return console.error(err.message); }, function () {
                            loading_2.dismiss();
                        });
                    }
                    else {
                        this.db.TransectionPage(false, 'validation', 'amount must be greater than zero.');
                    }
                }
                else {
                    this.db.TransectionPage(false, 'validation', 'you cannot send money to yourself.');
                }
            }
            else {
                this.db.TransectionPage(false, 'validation', 'enter a valid user detail');
            }
        }
        else {
            alert("Please enter a valid detail.");
        }
    };
    SendPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-send',template:/*ion-inline-start:"/Users/rohitshukla/Desktop/new/flipprr/src/pages/send/send.html"*/'<ion-header no-border>\n  <ion-navbar color="basecolor">\n    <ion-title>send money</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content padding>\n  <ion-list id="in">\n    <form [formGroup]="sendmoneyForm">\n\n    <ion-input [(ngModel)]="samt" id="amtm" [formControl]="sendmoneyForm.controls[\'amt\']"  text-center type="number" value="" \n    placeholder="amount"></ion-input>\n      \n    <ion-label *ngIf="isFieldInvalid(\'amt\')">please enter a valid amount.</ion-label>\n      <ion-item style="margin-top:4%;">\n        <ion-input [(ngModel)]="mono" [formControl]="sendmoneyForm.controls[\'udt\']" type="number" value="" placeholder="mobile number"\n          (ionChange)=\'velidator();\' style="color:white;"></ion-input>\n      </ion-item>\n<ion-label right style="color:white;">{{recieverName}}</ion-label>\n      <ion-label *ngIf="isFieldInvalid(\'udt\')">please enter a valid mobile number.</ion-label>\n      <button ion-button full color="light" round class="login" style="color: rgb(109, 154, 255);font-size: 150%; margin-top: 30%; transition:\nnone;" (click)="sendbtn();" [disabled]="!sendmoneyForm.valid">send</button>\n\n    </form>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/rohitshukla/Desktop/new/flipprr/src/pages/send/send.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */]])
    ], SendPage);
    return SendPage;
}());

//# sourceMappingURL=send.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VaddmoneyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var VaddmoneyPage = /** @class */ (function () {
    function VaddmoneyPage(statusBar, navCtrl, db, navParams, storage, loadingCtrl, fb) {
        this.statusBar = statusBar;
        this.navCtrl = navCtrl;
        this.db = db;
        this.navParams = navParams;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.fb = fb;
        this
            .statusBar
            .styleDefault();
        this.addmoneyForm = __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormGroup */];
        this.addmoneyForm = fb.group({
            'amt': [
                null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].pattern(/^([a-zA-Z0-9_-]){8,8}$/)
                ])
            ]
        });
    }
    VaddmoneyPage.prototype.ionViewWillEnter = function () {
        this
            .statusBar
            .styleDefault();
    };
    VaddmoneyPage.prototype.ionViewDidLoad = function () {
        this
            .statusBar
            .styleDefault();
    };
    VaddmoneyPage.prototype.isFieldInvalid = function (field) {
        return ((!this.addmoneyForm.get(field).valid && this.addmoneyForm.get(field).touched) || (this.addmoneyForm.get(field).untouched && this.formSubmitAttempt));
    };
    VaddmoneyPage.prototype.Vaddmoney = function () {
        var _this = this;
        if (this.addmoneyForm.valid) {
            if (this.RewardId || 0 != 0) {
                var loading_1 = this
                    .loadingCtrl
                    .create({ spinner: 'dots' });
                loading_1.present();
                this
                    .storage
                    .get('user')
                    .then(function (val) {
                    _this.UserId = val;
                    var obj = {
                        UserId: _this.UserId,
                        RewardId: _this.RewardId
                    };
                    _this
                        .db
                        .addRewardMoney(obj)
                        .subscribe(function (data) {
                        _this
                            .db
                            .TransectionPage(JSON.parse(data.json()).flag.toLowerCase(), 'Vaddmoney', JSON.parse(data.json()));
                        _this.RewardId = 0;
                    }, function (err) { return console.error(err.message); }, function () {
                        loading_1.dismiss();
                        _this.RewardId = 0;
                    });
                });
            }
            else {
                this
                    .db
                    .TransectionPage(false, 'validation', 'invalid voucher code');
            }
        }
        else {
            alert("Enter a valid detail");
        }
    };
    VaddmoneyPage.prototype.Vvelidator = function () {
        var _this = this;
        this
            .storage
            .get('user')
            .then(function (val) {
            _this.UserId = val;
            if ((_this.vamt.length) == 8) {
                var loading_2 = _this
                    .loadingCtrl
                    .create({ spinner: 'dots' });
                loading_2.present();
                _this
                    .db
                    .validateRewardCode({ UserId: _this.UserId, RewardCode: _this.vamt })
                    .subscribe(function (data) {
                    _this.RewardsValidate = JSON.parse(data.json());
                    if (_this.RewardsValidate.flag.toLowerCase() != 'true') {
                        alert(_this.RewardsValidate.Message);
                    }
                    else {
                        _this.RewardId = _this.RewardsValidate.RewardId;
                        alert("You will get " + _this.RewardsValidate.RewardAmount + " reward.");
                    }
                    // this.spinner.hide();
                }, function (err) { return console.error(err.message); }, function () {
                    loading_2.dismiss();
                });
            }
        });
    };
    VaddmoneyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({ selector: 'page-vaddmoney',template:/*ion-inline-start:"/Users/rohitshukla/Desktop/new/flipprr/src/pages/vaddmoney/vaddmoney.html"*/'\n<ion-header no-border>\n  <ion-navbar color="basecolor">\n    <ion-title>Add Vouvher</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding style=" background-color:#F0A03C;">\n    <form [formGroup]="addmoneyForm">\n  <ion-list id="in">\n  <!-- <ion-item> -->\n    <!-- <ion-input [(ngModel)]="vamt" [formControl]="addmoneyForm.controls[\'amt\']" type="text" value="" placeholder="enter voucher" class="box" style="margin-top: 12%;" (ionChange)=\'Vvelidator();\'></ion-input> -->\n  \n  <ion-input [(ngModel)]="vamt" [formControl]="addmoneyForm.controls[\'amt\']" placeholder="voucher code" id="amt" text-center\n    type="text" style="border-radius: 30px;">\n  </ion-input>\n\n  <!-- </ion-item> -->\n\n  <ion-label *ngIf="isFieldInvalid(\'amt\')">Please enter a valid code.</ion-label>\n  <button ion-button full color="light" round class="login" style="color: blue;transition: none;height:50px;font-size: 150%;"\n     (click)="Vaddmoney();" [disabled]="!addmoneyForm.valid">continue</button>\n\n</ion-list>\n</form>\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/rohitshukla/Desktop/new/flipprr/src/pages/vaddmoney/vaddmoney.html"*/ }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]])
    ], VaddmoneyPage);
    return VaddmoneyPage;
}());

//# sourceMappingURL=vaddmoney.js.map

/***/ }),

/***/ 127:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 127;

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_catch__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RestProvider = /** @class */ (function () {
    function RestProvider(model, http) {
        this.model = model;
        this.http = http;
        // private apiUrl = 'https://restcountries.eu/rest/v2/all';
        this.apiUrl = 'http://api.softomation.in/api/user/';
        this.paymentUrl = 'http://secure.softomation.in/#/ProcessTranscation?TID=';
        this.imageUrl = 'http://api.softomation.in/api/user/';
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
    RestProvider.prototype.TransectionPage = function (flag, page, data) {
        var myDate = {
            flag: flag,
            mydata: data,
            page: page
        };
        var myModel = this.model.create('SweetAlertPage', { data: myDate });
        myModel.present();
    };
    RestProvider.prototype.loginUser = function (objLogin) {
        return this
            .http
            .post(this.apiUrl + 'LoginMaster', objLogin);
        // userid 
    };
    RestProvider.prototype.profiGeter = function (objProfiler) {
        return this
            .http
            .post(this.apiUrl + 'GetProfileByLogin', objProfiler);
        // userid
    };
    RestProvider.prototype.transcationDetails = function (objTransection) {
        return this
            .http
            .post(this.apiUrl + 'GetTranscationDetails', objTransection);
    };
    //this  will return ballance in waller
    RestProvider.prototype.availableBalance = function (objballance) {
        return this
            .http
            .post(this.apiUrl + 'GetAvailableBalance', objballance);
        //  Name,UserName,UserPassword,EmailId,MobileNo
    };
    RestProvider.prototype.profiGeterAll = function (objProfile) {
        return this
            .http
            .post(this.apiUrl + 'GetAllProfileDetails', objProfile);
        //  Name,UserName,UserPassword,EmailId,MobileNo
    };
    RestProvider.prototype.transcationManagement = function (objTrans) {
        return this
            .http
            .post(this.apiUrl + 'TranscationManagement', objTrans);
        //  Name,UserName,UserPassword,EmailId,MobileNo
    };
    RestProvider.prototype.requestMoney = function (objTrans) {
        return this
            .http
            .post(this.apiUrl + 'RequestMoney', objTrans);
        //  Name,UserName,UserPassword,EmailId,MobileNo
    };
    RestProvider.prototype.ValidateProfile = function (objValidateProfile) {
        return this
            .http
            .post(this.apiUrl + 'GetProfileByLogin', objValidateProfile);
    };
    RestProvider.prototype.transcationManagementRequestMoney = function (objT) {
        return this
            .http
            .post(this.apiUrl + 'RequestMoney', objT);
        //  Name,UserName,UserPassword,EmailId,MobileNo
    };
    RestProvider.prototype.validateRewardCode = function (objRewardCode) {
        return this
            .http
            .post(this.apiUrl + 'ValidateRewardCode', objRewardCode);
    };
    RestProvider.prototype.addRewardMoney = function (objRewardCode) {
        return this
            .http
            .post(this.apiUrl + 'AddRewardMoney', objRewardCode);
    };
    RestProvider.prototype.generateUser = function (objRewardCode) {
        return this
            .http
            .post(this.apiUrl + 'GenerateUser', objRewardCode);
    };
    RestProvider.prototype.loginService = function (objRewardCode) {
        return this
            .http
            .post(this.apiUrl + 'ValidateOTP', objRewardCode);
    };
    RestProvider.prototype.resendOTP = function (objRewardCode) {
        return this
            .http
            .post(this.apiUrl + 'ResendOTP', objRewardCode);
    };
    RestProvider.prototype.forgotPasswordmaster = function (objRewardCode) {
        return this
            .http
            .post(this.apiUrl + 'ForgetPassword', objRewardCode);
    };
    RestProvider.prototype.changePassword = function (objRewardCode) {
        return this
            .http
            .post(this.apiUrl + 'ChangePassword', objRewardCode);
    };
    RestProvider.prototype.getProfileByLogin = function (objRewardCode) {
        return this
            .http
            .post(this.apiUrl + 'GetProfileByLogin', objRewardCode);
    };
    RestProvider.prototype.UpdateProfile = function (objUpdateProfile) {
        return this
            .http
            .post(this.apiUrl + 'UpdatePersonalDetails', objUpdateProfile);
    };
    RestProvider.prototype.getNotification = function (objUpdateProfile) {
        return this
            .http
            .post(this.apiUrl + 'GetNotification', objUpdateProfile);
    };
    RestProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
    ], RestProvider);
    return RestProvider;
}());

//# sourceMappingURL=rest.js.map

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/accounts/accounts.module": [
		170
	],
	"../pages/addmoney/addmoney.module": [
		307,
		12
	],
	"../pages/getotp/getotp.module": [
		308,
		3
	],
	"../pages/inputno/inputno.module": [
		309,
		2
	],
	"../pages/login-user/login-user.module": [
		310,
		11
	],
	"../pages/pass-reset/pass-reset.module": [
		311,
		10
	],
	"../pages/record/record.module": [
		172
	],
	"../pages/request/request.module": [
		312,
		9
	],
	"../pages/resetpass/resetpass.module": [
		313,
		1
	],
	"../pages/send/send.module": [
		314,
		8
	],
	"../pages/shoping/shoping.module": [
		173
	],
	"../pages/signer/signer.module": [
		315,
		7
	],
	"../pages/signup/signup.module": [
		316,
		6
	],
	"../pages/sweet-alert/sweet-alert.module": [
		317,
		0
	],
	"../pages/tabmaster/tabmaster.module": [
		318,
		5
	],
	"../pages/vaddmoney/vaddmoney.module": [
		319,
		4
	],
	"../pages/wallet/wallet.module": [
		174
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 169;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsPageModule", function() { return AccountsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accounts__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AccountsPageModule = /** @class */ (function () {
    function AccountsPageModule() {
    }
    AccountsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__accounts__["a" /* AccountsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__accounts__["a" /* AccountsPage */]),
            ],
        })
    ], AccountsPageModule);
    return AccountsPageModule;
}());

//# sourceMappingURL=accounts.module.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordPageModule", function() { return RecordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__record__ = __webpack_require__(92);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RecordPageModule = /** @class */ (function () {
    function RecordPageModule() {
    }
    RecordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__record__["a" /* RecordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__record__["a" /* RecordPage */]),
            ],
        })
    ], RecordPageModule);
    return RecordPageModule;
}());

//# sourceMappingURL=record.module.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopingPageModule", function() { return ShopingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shoping__ = __webpack_require__(93);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ShopingPageModule = /** @class */ (function () {
    function ShopingPageModule() {
    }
    ShopingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__shoping__["a" /* ShopingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__shoping__["a" /* ShopingPage */]),
            ],
        })
    ], ShopingPageModule);
    return ShopingPageModule;
}());

//# sourceMappingURL=shoping.module.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletPageModule", function() { return WalletPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wallet__ = __webpack_require__(94);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WalletPageModule = /** @class */ (function () {
    function WalletPageModule() {
    }
    WalletPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__wallet__["a" /* WalletPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__wallet__["a" /* WalletPage */]),
            ],
        })
    ], WalletPageModule);
    return WalletPageModule;
}());

//# sourceMappingURL=wallet.module.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_login_user_login_user__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabmaster_tabmaster__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_screen_orientation__ = __webpack_require__(216);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = /** @class */ (function () {
    function HomePage(screenOrientation, statusBar, navCtrl, menu, loadingCtrl, storage) {
        this.screenOrientation = screenOrientation;
        this.statusBar = statusBar;
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.statusBar.backgroundColorByHexString('#00B2E5');
        // this.statusBar.overlaysWebView(true);
        this.statusBar.styleDefault();
        this.menu.swipeEnable(false);
    }
    HomePage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */]);
    };
    HomePage.prototype.ionViewWillLoad = function () {
        this.statusBar.styleDefault();
    };
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        //  this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
        this.statusBar.styleDefault();
        this.statusBar.styleDefault();
        this.storage.get('user').then(function (val) {
            // console.log('Your age is', val);
            if (val != null) {
                _this
                    .navCtrl
                    .push(__WEBPACK_IMPORTED_MODULE_4__tabmaster_tabmaster__["a" /* TabmasterPage */]);
                _this
                    .navCtrl
                    .setRoot(__WEBPACK_IMPORTED_MODULE_4__tabmaster_tabmaster__["a" /* TabmasterPage */]);
            }
            else {
                // console.log(val+"null hai ");
            }
        });
        // if(this.block.blockA !=""){
        // alert(this.block.blockA)
        // this
        //   .navCtrl
        //   .push(TabmasterPage);
        // this
        //   .navCtrl
        //   .setRoot(TabmasterPage);
        // }else{
        // alert("sorry");
        // }
    };
    HomePage.prototype.openFilters = function () {
        this
            .navCtrl
            .push(__WEBPACK_IMPORTED_MODULE_2__pages_login_user_login_user__["a" /* LoginUserPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/rohitshukla/Desktop/new/flipprr/src/pages/home/home.html"*/'\n<ion-content padding class="con">\n  <span class="dot" style="margin-top:20%;"></span>\n  <!-- <div class="imgcenter"><ion-img width="60" height="40" src="../assets/imgs/c1.jpeg"></ion-img></div> -->\n  <p class="flipper" style="font-size:400%;">flipprr</p>\n  <P class="quote">believe in the golden rule\'s,<br>gold alway rules<br>__</P>\n\n  <!-- <button ion-button >Full Button</button> -->\n  <button ion-button full color="light" round class="login" (click)=\'openFilters();\' style="color: rgb(109, 154, 255);">login</button>\n\n\n\n<div class="a">\n  <h2>\n    <span></span>\n  </h2>\n</div>\n  \n    <button ion-button full color="light" round class="login" (click)=\'signup();\' style="color: rgb(109, 154, 255);">sign up</button>\n  \n</ion-content>'/*ion-inline-end:"/Users/rohitshukla/Desktop/new/flipprr/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__ionic_native_screen_orientation__["a" /* ScreenOrientation */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PassResetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_user_login_user__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(14);
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
 * Generated class for the PassResetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PassResetPage = /** @class */ (function () {
    function PassResetPage(navCtrl, statusBar, navParams, db) {
        this.navCtrl = navCtrl;
        this.statusBar = statusBar;
        this.navParams = navParams;
        this.db = db;
    }
    PassResetPage.prototype.ionViewWillLoad = function () {
        this.statusBar.styleDefault();
    };
    PassResetPage.prototype.ionViewDidLoad = function () {
        this.statusBar.styleDefault();
    };
    PassResetPage.prototype.OtpSender = function () {
        var _this = this;
        this
            .db
            .forgotPasswordmaster({ LoginId: this.monor })
            .subscribe(function (data) {
            _this.UserData = JSON.parse(data.json());
            _this.otpid = _this.UserData.OTPId;
            _this.otp = _this.UserData.OTP;
            if (_this.UserData.flag.toLowerCase() == 'true') { }
            else {
                alert(_this.UserData.Message);
            }
            // spinner
        }, function (error) {
            // spinner
            alert("This user name is not register with us");
        });
    };
    PassResetPage.prototype.Passverifier = function () {
        if (this.passA == this.passB) {
            this.verifiedpass = this.passA;
            alert("Password verified");
        }
        else {
            this.verifiedpass = null;
            alert("Password not same..");
        }
    };
    PassResetPage.prototype.ChnagePassword = function () {
        var _this = this;
        if (this.otp != this.otpr) {
            alert("OTP does not match");
        }
        else {
            var obj = {
                UserId: this.UserData.UserId,
                OTPId: this.UserData.OTPId,
                OTP: this.otpr,
                Password: this.verifiedpass,
            };
            if (this.passA == this.passB) {
                this.db.changePassword(obj)
                    .subscribe(function (data) {
                    _this.UserData = JSON.parse(data.json());
                    if (_this.UserData.flag.toLowerCase() == 'true') {
                        alert("Password successfully changed!!!");
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_user_login_user__["a" /* LoginUserPage */]);
                    }
                    else {
                        alert(_this.UserData.Message);
                    }
                    // spinner
                }, function (error) {
                    // spinner
                    alert("This user name is not register with us");
                });
            }
            else {
                alert("Password and Confirm Password is not same..");
            }
        }
    };
    PassResetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pass-reset',template:/*ion-inline-start:"/Users/rohitshukla/Desktop/new/flipprr/src/pages/pass-reset/pass-reset.html"*/'<ion-header no-border>\n  <ion-navbar color="basecolor">\n    <ion-title>Password Reset</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="outer-content" style=" background-color:#F0A03C;">\n<ion-list id="in">\n    <ion-item id="in" >\n    <ion-input [(ngModel)]="monor" type="number" value="" placeholder="Mobile No." >\n    </ion-input>\n      <button ion-button outline item-end (click)="OtpSender();" style="border-color: #040401;\ncolor: #0d0903;"> send otp </button>\n    </ion-item>\n    <ion-item>\n\n      <ion-input [(ngModel)]="otpr" type="number" value="" placeholder="Otp.."></ion-input>\n  <button ion-button outline item-end style="border-color: #040401; color: #0d0903;">re-send</button>\n    </ion-item>\n      <ion-item>\n        <ion-input [(ngModel)]="passA" type="password" value="" placeholder="password"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-input [(ngModel)]="passB" type="password" value="" placeholder="Confirm Password..."></ion-input>\n          <button ion-button outline item-end (click)="Passverifier();" style="border-color: #040401; color: #0d0903;"> Verify </button>\n      </ion-item>\n\n      </ion-list>\n<button ion-button block (click)="ChnagePassword();">change password</button>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/rohitshukla/Desktop/new/flipprr/src/pages/pass-reset/pass-reset.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */]])
    ], PassResetPage);
    return PassResetPage;
}());

//# sourceMappingURL=pass-reset.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(241);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginUserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabmaster_tabmaster__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signup_signup__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__signer_signer__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import {WalletPage} from '../../pages/wallet/wallet';





/**
 * Generated class for the LoginUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginUserPage = /** @class */ (function () {
    function LoginUserPage(statusBar, fb, navCtrl, menu, loadingCtrl, navParams, db, storage) {
        this.statusBar = statusBar;
        this.fb = fb;
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.db = db;
        this.storage = storage;
        this.hide = true;
        this.passwordType = 'password';
        this.passwordIcon = 'eye-off';
        this.menu.swipeEnable(false);
        this.loginForm = __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormGroup */];
        this.loginForm = fb.group({
            'loginid': [null, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].required])],
            'upassword': [null, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_6__angular_forms__["g" /* Validators */].required])]
        });
    }
    LoginUserPage.prototype.isFieldInvalid = function (field) {
        return ((!this.loginForm.get(field).valid && this.loginForm.get(field).touched) ||
            (this.loginForm.get(field).untouched && this.formSubmitAttempt));
    };
    LoginUserPage.prototype.ionViewWillEnter = function () {
        this
            .menu
            .enable(false, 'yourmenu');
        // this.nav.swipeBackEnabled = false;
    };
    LoginUserPage.prototype.ionViewWillLoad = function () {
        this.statusBar.styleDefault();
    };
    LoginUserPage.prototype.ionViewDidLoad = function () {
        this.menu.swipeEnable(false);
        this.statusBar.styleDefault();
    };
    LoginUserPage.prototype.forG = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__signer_signer__["a" /* SignerPage */]);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__signer_signer__["a" /* SignerPage */]);
    };
    LoginUserPage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__signup_signup__["a" /* SignupPage */]);
        // alert("hi")
    };
    LoginUserPage.prototype.loginhandler = function () {
        var _this = this;
        if (this.loginForm.valid) {
            this.formSubmitAttempt = true;
            var loading_1 = this.loadingCtrl.create({ spinner: 'dots' });
            loading_1.present();
            var obj = {
                LoginId: this.loginForm.value.loginid,
                Password: this.loginForm.value.upassword,
            };
            this.db.loginUser(obj).subscribe(function (data) {
                _this.Loginresponce = JSON.parse(data.json());
                if (_this.Loginresponce.flag == 'true') {
                    _this.storage.set('user', _this.Loginresponce.UserId);
                    _this.storage.set('mono', _this.Loginresponce.MobileNo);
                    _this.storage.set('name', _this.Loginresponce.Name);
                    _this.storage.set('emailId', _this.Loginresponce.EmailId);
                    _this.storage.set('userName', _this.Loginresponce.UserName);
                    _this.storage.set('firstName', _this.Loginresponce.FirstName);
                    _this.storage.set('lastName', _this.Loginresponce.LastName);
                    _this.storage.set('profilePicPath', _this.Loginresponce.ProfilePicPath);
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_tabmaster_tabmaster__["a" /* TabmasterPage */]);
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_tabmaster_tabmaster__["a" /* TabmasterPage */]);
                }
                else {
                    alert(_this.Loginresponce.Message);
                }
            }, function (err) { return console.error("Error in Login Page" + err.message); }, function () {
                loading_1.dismiss();
            });
        }
        else {
            alert('Please enter your login details.');
        }
    };
    LoginUserPage.prototype.hideShowPassword = function () {
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
    };
    LoginUserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login-user',template:/*ion-inline-start:"/Users/rohitshukla/Desktop/new/flipprr/src/pages/login-user/login-user.html"*/'\n<ion-content padding="true" class="parent" >\n  \n  <p class="p" style="margin-top: 22%;">log in to your account\n    <br>\n    <a class="and">&</a>check your wealth.\n    <br>\n  </p>\n\n<form [formGroup]="loginForm">\n    <ion-item id="user" >\n      <ion-label floating>\n        <b>login id/ mobile no</b>\n      </ion-label>\n      <ion-input name=\'loginid\' type="text"  [formControl]="loginForm.controls[\'loginid\']"></ion-input>\n      \n    </ion-item>\n    <ion-label *ngIf="isFieldInvalid(\'loginid\')" style="padding-left: 12px;">login id/ mobile no must be entered</ion-label>\n   \n  \n    <ion-item id="user">\n      <ion-label floating>\n        <b>password</b>\n      </ion-label>\n    <ion-input name=\'upassword\' [type]="passwordType" [formControl]="loginForm.controls[\'upassword\']">\n\n    </ion-input>\n    <button ion-button clear item-end (click)=\'hideShowPassword()\' class="eyebtn">\n        <ion-icon [name]="passwordIcon"  style="font-size:200%;"></ion-icon>\n      </button>\n    </ion-item>\n\n    \n    <ion-label *ngIf="isFieldInvalid(\'upassword\')" style="padding-left: 12px;" >password must be entered</ion-label>\n  <!-- <button ion-button block  ></button> -->\n\n      <button ion-button full color="light" round class="login" (click)="loginhandler();" style="color: rgb(109, 154, 255);height:40px;">login</button>\n\n    <div ion-item id="sifor">\n      <button (click)="signup();" class="sss" style="webkit-text-fill-color: white;"><u>sign up</u></button>\n      <button item-end (click)="forG();"  class="sss" style="webkit-text-fill-color: white;"><u>forget password</u></button>\n    </div>\n\n    </form>\n</ion-content>\n'/*ion-inline-end:"/Users/rohitshukla/Desktop/new/flipprr/src/pages/login-user/login-user.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], LoginUserPage);
    return LoginUserPage;
}());

//# sourceMappingURL=login-user.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_keyboard__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_user_login_user__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tabmaster_tabmaster__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_rest_rest__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_send_send__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_request_request__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_addmoney_addmoney__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_vaddmoney_vaddmoney__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_storage__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_pass_reset_pass_reset__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_wallet_wallet__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_accounts_accounts__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_record_record__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_shoping_shoping__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_record_record_module__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_shoping_shoping_module__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_accounts_accounts_module__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_wallet_wallet_module__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_signer_signer__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_screen_orientation__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_social_sharing__ = __webpack_require__(119);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* enableProdMode */])();
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_user_login_user__["a" /* LoginUserPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabmaster_tabmaster__["a" /* TabmasterPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_send_send__["a" /* SendPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_request_request__["a" /* RequestPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_addmoney_addmoney__["a" /* AddmoneyPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_vaddmoney_vaddmoney__["a" /* VaddmoneyPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_pass_reset_pass_reset__["a" /* PassResetPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_signer_signer__["a" /* SignerPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {
                    scrollPadding: false,
                    scrollAssist: true,
                    autoFocusAssist: false
                }, {
                    links: [
                        { loadChildren: '../pages/accounts/accounts.module#AccountsPageModule', name: 'AccountsPage', segment: 'accounts', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/addmoney/addmoney.module#AddmoneyPageModule', name: 'AddmoneyPage', segment: 'addmoney', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/getotp/getotp.module#GetotpPageModule', name: 'GetotpPage', segment: 'getotp', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inputno/inputno.module#InputnoPageModule', name: 'InputnoPage', segment: 'inputno', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login-user/login-user.module#LoginUserPageModule', name: 'LoginUserPage', segment: 'login-user', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pass-reset/pass-reset.module#PassResetPageModule', name: 'PassResetPage', segment: 'pass-reset', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/record/record.module#RecordPageModule', name: 'RecordPage', segment: 'record', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/request/request.module#RequestPageModule', name: 'RequestPage', segment: 'request', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/resetpass/resetpass.module#ResetpassPageModule', name: 'ResetpassPage', segment: 'resetpass', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/send/send.module#SendPageModule', name: 'SendPage', segment: 'send', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/shoping/shoping.module#ShopingPageModule', name: 'ShopingPage', segment: 'shoping', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signer/signer.module#SignerPageModule', name: 'SignerPage', segment: 'signer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sweet-alert/sweet-alert.module#SweetAlertPageModule', name: 'SweetAlertPage', segment: 'sweet-alert', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabmaster/tabmaster.module#TabmasterPageModule', name: 'TabmasterPage', segment: 'tabmaster', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/vaddmoney/vaddmoney.module#VaddmoneyPageModule', name: 'VaddmoneyPage', segment: 'vaddmoney', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/wallet/wallet.module#WalletPageModule', name: 'WalletPage', segment: 'wallet', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_17__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_23__pages_record_record_module__["RecordPageModule"],
                __WEBPACK_IMPORTED_MODULE_24__pages_shoping_shoping_module__["ShopingPageModule"],
                __WEBPACK_IMPORTED_MODULE_25__pages_accounts_accounts_module__["AccountsPageModule"],
                __WEBPACK_IMPORTED_MODULE_26__pages_wallet_wallet_module__["WalletPageModule"],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_user_login_user__["a" /* LoginUserPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabmaster_tabmaster__["a" /* TabmasterPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_send_send__["a" /* SendPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_request_request__["a" /* RequestPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_addmoney_addmoney__["a" /* AddmoneyPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_vaddmoney_vaddmoney__["a" /* VaddmoneyPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_pass_reset_pass_reset__["a" /* PassResetPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_record_record__["a" /* RecordPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_shoping_shoping__["a" /* ShopingPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_accounts_accounts__["a" /* AccountsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_wallet_wallet__["a" /* WalletPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_signer_signer__["a" /* SignerPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_keyboard__["a" /* Keyboard */],
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_social_sharing__["a" /* SocialSharing */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__providers_rest_rest__["a" /* RestProvider */],
                // BlockAProvider,
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_screen_orientation__["a" /* ScreenOrientation */], __WEBPACK_IMPORTED_MODULE_27__pages_signer_signer__["a" /* SignerPage */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_wallet_wallet__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_user_login_user__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabmaster_tabmaster__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_observable_timer__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_observable_timer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_record_record__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_accounts_accounts__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_shoping_shoping__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_storage__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_keyboard__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var MyApp = /** @class */ (function () {
    function MyApp(platform, config, keyboard, statusBar, storage, splashScreen) {
        this.platform = platform;
        this.config = config;
        this.keyboard = keyboard;
        this.statusBar = statusBar;
        this.storage = storage;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        this.showSplash = true;
        this.splashScreen.hide();
        this.initializeApp();
        this.splashScreen.hide();
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.splashScreen.hide();
        this.platform.ready().then(function () {
            // this.keyboard.disableScroll(false);
            // this.keyboard.hideKeyboardAccessoryBar(true);
            _this.splashScreen.hide();
            _this.statusBar.styleDefault();
            Object(__WEBPACK_IMPORTED_MODULE_8_rxjs_observable_timer__["timer"])(30).subscribe(function () { return _this.showSplash = false; });
        });
    };
    MyApp.prototype.sideWallet = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__pages_wallet_wallet__["a" /* WalletPage */]);
        // this.nav.setRoot(TabmasterPage);
    };
    MyApp.prototype.record = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_9__pages_record_record__["a" /* RecordPage */]);
        // this.nav.setRoot(TabmasterPage);
    };
    MyApp.prototype.rooter = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__pages_tabmaster_tabmaster__["a" /* TabmasterPage */]);
        // this.nav.setRoot(TabmasterPage);
    };
    MyApp.prototype.recorder = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_9__pages_record_record__["a" /* RecordPage */]);
        //  this.nav.setRoot(TabmasterPage);
    };
    MyApp.prototype.profiler = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_11__pages_shoping_shoping__["a" /* ShopingPage */]);
        // this.nav.setRoot(TabmasterPage);
    };
    MyApp.prototype.notifier = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_10__pages_accounts_accounts__["a" /* AccountsPage */]);
        // this.nav.setRoot(TabmasterPage);
    };
    MyApp.prototype.logout = function () {
        this
            .nav
            .push(__WEBPACK_IMPORTED_MODULE_6__pages_login_user_login_user__["a" /* LoginUserPage */]);
        this
            .nav
            .setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_login_user_login_user__["a" /* LoginUserPage */]);
        this.storage.set('user', null);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/rohitshukla/Desktop/new/flipprr/src/app/app.html"*/'\n<ion-menu [content]="content" id="sider">\n<ion-header no-border>\n    <ion-navbar color="basecolor">\n    <ion-toolbar>\n        <ion-title class="head">\n        <div>\n            <span class="dot"></span>\n            <p class="name1">John Devidson</p>\n        </div>\n        <p class="name2">view profile</p>\n        </ion-title>\n    </ion-toolbar>\n    </ion-navbar>\n</ion-header>\n    <ion-content padding class="backcolor">\n       \n\n\n<ion-list id="st">\n    <ion-item id="it" (click)=\'sideWallet();\' menuClose>My Wallet</ion-item>\n    <ion-item id="it"  (click)=\'record();\' menuClose>History</ion-item>\n    <ion-item id="it" (click)=\'profiler();\'  menuClose>Profile</ion-item>\n    <ion-item id="it"  (click)=\'notifier();\' menuClose>Notification</ion-item>\n    <p class="logout" (click)=\'logout();\' menuClose>Logout</p>\n</ion-list>\n    </ion-content>\n    </ion-menu>\n    <ion-nav [root]="rootPage" #content swipeBackEnabled="false" style="height:100%;width:100%;background-image: linear-gradient(25deg, #6320de 0%,#534fff 34%,#15a1f1 74%, #00bdd3 100%);" ></ion-nav>'/*ion-inline-end:"/Users/rohitshukla/Desktop/new/flipprr/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Config */], __WEBPACK_IMPORTED_MODULE_13__ionic_native_keyboard__["a" /* Keyboard */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_12__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabmasterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_keyboard__ = __webpack_require__(44);
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
 * Generated class for the TabmasterPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabmasterPage = /** @class */ (function () {
    function TabmasterPage(navCtrl, keyboard) {
        this.navCtrl = navCtrl;
        this.keyboard = keyboard;
        this.recordRoot = 'RecordPage';
        this.shopingRoot = 'ShopingPage';
        this.accountsRoot = 'AccountsPage';
        this.paymentRoot = 'PaymentPage';
        this.walletRoot = 'WalletPage';
    }
    TabmasterPage.prototype.ionViewDidEnter = function () {
        //  Keyboard.onKeyboardShow().subscribe(()=>{this.valueforngif=false})
        //  Keyboard.onKeyboardHide().subscribe(()=>{this.valueforngif=true})
    };
    TabmasterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabmaster',template:/*ion-inline-start:"/Users/rohitshukla/Desktop/new/flipprr/src/pages/tabmaster/tabmaster.html"*/'<ion-tabs>\n    <!-- <ion-tabs tabsPlacement="top"></ion-tabs> -->\n    <ion-tab [root]="walletRoot" tabTitle="wallet" tabIcon="custom-wallet"></ion-tab>\n    <ion-tab [root]="recordRoot" tabTitle="transaction" tabIcon="custom-history"></ion-tab>\n    <ion-tab [root]="shopingRoot" tabTitle="profile" tabIcon="custom-profile" name="three"></ion-tab>\n    <ion-tab [root]="accountsRoot" tabTitle="notification" tabIcon="custom-email"></ion-tab>\n    <!-- <ion-tab [root]="paymentRoot" tabTitle="Payment" tabIcon="card"></ion-tab> -->\n</ion-tabs>\n'/*ion-inline-end:"/Users/rohitshukla/Desktop/new/flipprr/src/pages/tabmaster/tabmaster.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_keyboard__["a" /* Keyboard */]])
    ], TabmasterPage);
    return TabmasterPage;
}());

//# sourceMappingURL=tabmaster.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
 * Generated class for the SignerPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignerPage = /** @class */ (function () {
    function SignerPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.inputnoRoot = 'InputnoPage';
        this.getotpRoot = 'GetotpPage';
        this.resetpassRoot = 'ResetpassPage';
    }
    SignerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signer',template:/*ion-inline-start:"/Users/rohitshukla/Desktop/new/flipprr/src/pages/signer/signer.html"*/'\n<ion-tabs tabsPlacement="top">\n    <ion-tab [root]="inputnoRoot" tabTitle="mobile no" tabIcon="call"></ion-tab>\n    <ion-tab [root]="getotpRoot" tabTitle="otp" tabIcon="md-chatboxes"></ion-tab>\n    <ion-tab [root]="resetpassRoot" tabTitle="reset" tabIcon="create"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/rohitshukla/Desktop/new/flipprr/src/pages/signer/signer.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
    ], SignerPage);
    return SignerPage;
}());

//# sourceMappingURL=signer.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_user_login_user__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_keyboard__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(90);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SignupPage = /** @class */ (function () {
    function SignupPage(keyboard, http, statusBar, fb, loadingCtrl, navCtrl, navParams, db, alertCtrl) {
        this.keyboard = keyboard;
        this.http = http;
        this.statusBar = statusBar;
        this.fb = fb;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.uservariable = "user name";
        this.getdata();
        this.statusBar.styleDefault();
        this.signupForm = fb.group({
            'userg': [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].pattern(/^([a-zA-Z0-9_-]){6,}$/)
                ])],
            'monog': [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required,
                    // Validators.pattern(/^[0-9]{10}$/)
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].pattern(/^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/)
                ])],
            'passg': [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\.*])(?=.{6,})/)
                ])],
            'cpassg': [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\.*])(?=.{6,})/)
                ])],
            'Remember': [
                null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].compose([])
                ])
            ],
        });
    }
    SignupPage.prototype.changer = function () {
        if (this.TC == true) {
        }
        else {
            alert(false);
        }
    };
    SignupPage.prototype.useralert = function () {
        this.uservariable = "must be 6 alpha-numeric character";
    };
    SignupPage.prototype.isFieldInvalid = function (field) {
        return ((!this.signupForm.get(field).valid && this.signupForm.get(field).touched) ||
            (this.signupForm.get(field).untouched && this.formSubmitAttempt));
    };
    SignupPage.prototype.ionViewWillEnter = function () {
        this.statusBar.styleDefault();
    };
    SignupPage.prototype.ionViewDidLoad = function () {
        this.statusBar.styleDefault();
        this.TC = false;
    };
    SignupPage.prototype.doPrompt = function () {
        var _this = this;
        var prompt = this
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
                    handler: function (data) {
                        // console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Resend',
                    handler: function (data) {
                        _this.ResendOTP();
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        _this.clientotp = data.otp;
                        _this.ValidateOTP();
                    }
                }
            ]
        });
        prompt.present();
    };
    SignupPage.prototype.login = function () {
        this
            .navCtrl
            .push(__WEBPACK_IMPORTED_MODULE_2__login_user_login_user__["a" /* LoginUserPage */]);
    };
    SignupPage.prototype.signup = function () {
        var _this = this;
        if (this.TC == false) {
            alert('Term & Cnditions must be accepted.');
            return;
        }
        else {
            if (this.signupForm.valid) {
                var loading_1 = this.loadingCtrl.create({ spinner: 'dots ' });
                loading_1.present();
                var obj = {
                    Name: '',
                    Email: '',
                    UserName: this.signupForm.value.userg,
                    MobileNo: this.signupForm.value.monog,
                    Password: this.signupForm.value.passg
                };
                this.formSubmitAttempt = true;
                this.db.generateUser(obj).subscribe(function (data) {
                    _this.geneUserResponce = JSON.parse(data.json());
                    _this.otpid = _this.geneUserResponce.OTPId;
                    _this.serverOtp = _this.geneUserResponce.OTP;
                    if (_this.geneUserResponce.flag.toLowerCase() == 'true') {
                        _this.doPrompt();
                    }
                    else {
                        alert(_this.geneUserResponce.Message);
                        if (_this.geneUserResponce.Message == 'Your Mobile no verification is pending.') {
                            _this.doPrompt();
                        }
                    }
                }, function (err) { return console.error("Error in Record Page" + err.message); }, function () {
                    // alert("error found");
                    loading_1.dismiss();
                });
            }
        }
    };
    SignupPage.prototype.ValidateOTP = function () {
        var _this = this;
        if (this.serverOtp != this.clientotp) {
            // this.btnResendOTP = true;
            this.doPrompt();
            alert("OTP is not matched.");
        }
        else {
            var obj = {
                OTPId: this.otpid,
                OTP: this.clientotp
            };
            this.db.loginService(obj)
                .subscribe(function (data) {
                _this.UserData = JSON.parse(data.json());
                if (_this.UserData.flag.toLowerCase() == 'true') {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_user_login_user__["a" /* LoginUserPage */]);
                }
                else {
                    _this.doPrompt();
                    alert(_this.UserData.Message);
                }
            }, function (error) {
                alert("OTP is not matched.");
            });
        }
    };
    SignupPage.prototype.ResendOTP = function () {
        var _this = this;
        this.db
            .resendOTP({
            OTPId: this.otpid
        })
            .subscribe(function (data) {
            _this.UserData = JSON.parse(data.json());
            _this.serverOtp = _this.UserData.OTP;
            if (_this.UserData.flag.toLowerCase() == 'true') {
                alert("OTP send successfully.");
                _this.doPrompt();
                _this.btnResendOTP = false;
            }
            else {
                alert(_this.UserData.Message);
            }
        }, function (error) {
            alert("This user name is not register with us");
        });
    };
    SignupPage.prototype.getdata = function () {
        var _this = this;
        this.http.get("assets/data/con.json")
            .subscribe(function (res) {
            _this.data = Array.of(res.json());
            _this.posts = _this.data[0];
            console.log("data is here" + _this.posts);
        }, function (error) {
            console.log(error);
        });
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/rohitshukla/Desktop/new/flipprr/src/pages/signup/signup.html"*/'<ion-header no-border>\n  <ion-navbar color="basecolor">\n    <ion-title class="tittle">\n      sign up\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content no-scroll class="parent" overflow-scroll="true" has-bouncing="false" scroll="false" padding>\n\n  <ion-scroll has-bouncing="true" style="width:100%;height:100%;" scrollY="true" >\n\n\n  <p class="pp" style="font-size: 2.4rem;text-align: center;margin-top: -10px;">great men always kept\n    <br>records of their coin.\n    <br>\n  </p>\n  <form [formGroup]="signupForm">\n\n\n    <div style="height:100%;width:100%;">\n      <ion-item id="login">\n        <ion-label floating>login id</ion-label>\n        <ion-input name=\'userg\' [formControl]="signupForm.controls[\'userg\']" type="text"></ion-input>\n      </ion-item>\n      <ion-label *ngIf="isFieldInvalid(\'userg\')" style="padding-left: 4%;">must be 6 alpha-numeric character</ion-label>\n      \n      <ion-grid>\n        <!-- using(https://forum.ionicframework.com/t/two-ion-input-component-in-the-line-ionic-3/87145/7) -->\n        <ion-row>\n          <ion-col col-4>\n            <!-- <ion-item> -->\n        <!-- <ion-label floating>...</ion-label> -->\n        <ion-select interface="action-sheet" style="background: none;" id="cccode">\n          <ion-option *ngFor="let code of posts;let i = index" [selected]="i == 86" style="background: none;">\n            <span class=\'flag-icon flag-icon-{{ cc }}\'></span>{{code.dial_code}},{{code.name}}</ion-option>\n        </ion-select>\n            <!-- </ion-item> -->\n          </ion-col>\n      \n          <ion-col col-8>\n            <ion-item class="padding-left-2px">\n                <ion-label floating>mobile number</ion-label>\n                <ion-input name=\'monog\' [formControl]="signupForm.controls[\'monog\']" type="number"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <ion-label *ngIf="isFieldInvalid(\'monog\')" style="padding-left: 4%;">please enter valid mobile number.</ion-label>\n      <ion-item id="login">\n        <ion-label floating>password</ion-label>\n        <ion-input name=\'passg\' [formControl]="signupForm.controls[\'passg\']" type="password" style="float: right;"></ion-input>\n      </ion-item>\n      <ion-label *ngIf="isFieldInvalid(\'passg\')" style="padding-left: 4%;">upper-case,numbers & special character</ion-label>\n     \n      <ion-item id="login">\n        <ion-label floating>\n          <b>confirm password</b>\n        </ion-label>\n        <ion-input name=\'cpassg\' [formControl]="signupForm.controls[\'cpassg\']" type="password"></ion-input>\n      </ion-item>\n      <ion-label *ngIf="isFieldInvalid(\'cpassg\')" style="padding-left: 4%;">password must be matcehd.</ion-label>\n      <ion-item id="Rem">\n        <ion-label>accept terms & conditions</ion-label>\n        <ion-checkbox [(ngModel)]="TC" name=\'Remember\' [formControl]="signupForm.controls[\'Remember\']"></ion-checkbox>\n      </ion-item>\n      <ion-label *ngIf="isFieldInvalid(\'Remember\')" (ionChange)="datachanged($event)">term & conditions must be accepted.\n      </ion-label>\n      <br>\n<button ion-button block (click)=\'signup();\' [disabled]="!signupForm.valid"  color="light" round id="login" style="color: rgb(109, 154, 255);font-size:200%;">sign up</button>\n\n    </div>\n  </form>\n  <p style="color:#fff;" class="kl">already signed?\n    <a class="underline" (click)=\'login();\'>login</a>\n</p>\n</ion-scroll>\n</ion-content>'/*ion-inline-end:"/Users/rohitshukla/Desktop/new/flipprr/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__ionic_native_keyboard__["a" /* Keyboard */], __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_user_login_user__ = __webpack_require__(23);
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
 * Generated class for the AccountsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AccountsPage = /** @class */ (function () {
    function AccountsPage(appCtrl, model, sanitize, navCtrl, db, storage, loadingCtrl, navParams, fb) {
        this.appCtrl = appCtrl;
        this.model = model;
        this.sanitize = sanitize;
        this.navCtrl = navCtrl;
        this.db = db;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.fb = fb;
    }
    AccountsPage.prototype.logout = function () {
        this.storage.set('user', null);
        this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_6__login_user_login_user__["a" /* LoginUserPage */]);
    };
    AccountsPage.prototype.ionViewDidLoad = function () {
        this.requestSender();
    };
    AccountsPage.prototype.requestSender = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ spinner: 'dots' });
        loading.present();
        this.storage.get('user').then(function (val) {
            _this.uid = val;
            var obj = {
                UserId: val,
            };
            _this.db.getNotification(obj).subscribe(function (data) {
                _this.notificationReposnse = (JSON.parse(data.json())).lstMoneyRequestNotificationDetails;
            }, function (err) { return console.error("Error in Record Page" + err.message); }, function () {
                // loading.dismiss();
            });
        });
        loading.dismiss();
    };
    AccountsPage.prototype.AcceptRequest = function (RequestRowData) {
        var loading = this.loadingCtrl.create({ spinner: 'dots' });
        loading.present();
        var obj = {
            UserId: this.uid,
            TranscationSourceId: 2,
            Amount: RequestRowData.Amount,
            PatnerUserId: RequestRowData.PartnerId,
            MsgDescription: '',
            RequestId: RequestRowData.RequestId,
            RewardId: 0
        };
        this.db.transcationManagement(obj).subscribe(function (data) {
            if (JSON.parse(data.json()).flag.toLowerCase() == 'true') {
                loading.dismiss();
                alert('Transection Successfull.Transection Id:' + JSON.parse(data.json()).TranscationId + ' & Now Available amount:' + JSON.parse(data.json()).AvailableBalance);
                // spinner
            }
            else {
                alert('Error on transfer Moeny !' + JSON.parse(data.json()).Message);
            }
        }, function (err) {
        }, function () {
        });
    };
    AccountsPage.prototype.RejectRequest = function (RequestRowData) {
        var loading = this.loadingCtrl.create({ spinner: 'dots' });
        loading.present();
        var obj = {
            RequesterId: this.uid,
            RequestToId: RequestRowData.PartnerId,
            Amount: RequestRowData.Amount,
            MsgDescription: '',
            RequestId: RequestRowData.RequestId
        };
        this
            .db
            .transcationManagementRequestMoney(obj)
            .subscribe(function (data) {
            if (JSON.parse(data.json()).flag.toLowerCase() == 'true') {
                loading.dismiss();
                alert('Request Canceled!!!!');
            }
            else {
                loading.dismiss();
                alert('Error on reject money request !' + JSON.parse(data.json()).Message);
            }
        }, function (err) {
        }, function () {
        });
    };
    AccountsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-accounts',template:/*ion-inline-start:"/Users/rohitshukla/Desktop/new/flipprr/src/pages/accounts/accounts.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>notification</ion-title>\n    <ion-buttons right>\n      <button ion-button icon-only (click)="logout();">\n        <ion-icon name="power"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="list-avatar-page">\n  <ion-list id="in" *ngFor=\'let res of notificationReposnse\'>\n      <ion-item>\n        <p> requested by: {{res.UserName}}:{{res.MobileNo}}</p>\n      </ion-item>\n      <ion-item>\n        <ion-input type="text" [(ngModel)]=\'res.Amount\' placeholder="number"></ion-input>\n        <ion-icon item-right name="checkmark-circle" class="Box" (click)="AcceptRequest(res)"></ion-icon>\n        <ion-icon item-right name="close-circle" (click)="RejectRequest(res)"></ion-icon>\n      </ion-item>\n      <ion-item>\n        {{res.Ldate}}\n        {{res.LTime}}\n      </ion-item>\n   <hr>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/rohitshukla/Desktop/new/flipprr/src/pages/accounts/accounts.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */]])
    ], AccountsPage);
    return AccountsPage;
}());

//# sourceMappingURL=accounts.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_user_login_user__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// import {DatePicker} from '@ionic-native/date-picker';
/**
 * Generated class for the RecordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RecordPage = /** @class */ (function () {
    function RecordPage(appCtrl, statusBar, navCtrl, navParams, loadingCtrl, db, storage) {
        this.appCtrl = appCtrl;
        this.statusBar = statusBar;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.db = db;
        this.storage = storage;
    }
    RecordPage.prototype.ionViewWillLoad = function () {
        this.statusBar.styleDefault();
    };
    RecordPage.prototype.logout = function () {
        this.storage.set('user', null);
        this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_5__login_user_login_user__["a" /* LoginUserPage */]);
    };
    RecordPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.statusBar.styleDefault();
        var loading = this.loadingCtrl.create({ spinner: 'dots' });
        loading.present();
        this.storage.get('user').then(function (val) {
            var obj = {
                UserId: val,
                TranscationSource: 'all',
            };
            _this.db.transcationDetails(obj).subscribe(function (data) {
                _this.transectionReposnse = (JSON.parse(data.json()));
            }, function (err) { return console.error("Error in Record Page" + err.message); }, function () {
                loading.dismiss();
            });
        });
    };
    RecordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-record',template:/*ion-inline-start:"/Users/rohitshukla/Desktop/new/flipprr/src/pages/record/record.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>transaction</ion-title>\n    <ion-buttons right>\n      <button ion-button icon-only (click)="logout();">\n        <ion-icon name="power"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n\n\n\n<ion-content no-scroll overflow-scroll="false" has-bouncing="false" scroll="false">\n\n  <ion-scroll has-bouncing="false" style="width:100%;height:100%;" scrollY="true">\n  <ion-list id="in">\n<ion-item *ngFor=\'let res of transectionReposnse\'>\n  <h2>{{res.TranscationId}}</h2>\n  <p>{{res.TranscationDetail}} {{res.PartnerLoginId}}</p>\n  <p> Transcation Status: {{res.TranscationStatus}}</p>\n  <p>{{res.Ldate}}  {{res.LTime}}</p>\n  <ion-note item-end id="price">{{res.Amount | currency :\'&#8377;\'}}</ion-note>\n</ion-item>\n</ion-list>\n</ion-scroll>\n</ion-content>'/*ion-inline-end:"/Users/rohitshukla/Desktop/new/flipprr/src/pages/record/record.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], RecordPage);
    return RecordPage;
}());

//# sourceMappingURL=record.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_user_login_user__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__signer_signer__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_keyboard__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ShopingPage = /** @class */ (function () {
    function ShopingPage(keyboard, appCtrl, navCtrl, storage, statusBar, db, loadingCtrl, navParams, fb) {
        this.keyboard = keyboard;
        this.appCtrl = appCtrl;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.statusBar = statusBar;
        this.db = db;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.DefaultImg = '../../../assets/images/users/avatar.png';
        this.profileImage = '';
        this.profileForm = __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormGroup */];
        this.profileForm = fb.group({
            'fname': [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required
                ])],
            'lname': [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required
                ])],
            'emid': [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].pattern(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/)
                ])]
        });
        this.requestSender();
    }
    ShopingPage.prototype.logout = function () {
        this.storage.set('user', null);
        this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_6__login_user_login_user__["a" /* LoginUserPage */]);
    };
    ShopingPage.prototype.ionViewWillLoad = function () {
        this.statusBar.styleDefault();
    };
    ShopingPage.prototype.cp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__signer_signer__["a" /* SignerPage */]);
    };
    ShopingPage.prototype.ionViewDidLoad = function () {
        this.statusBar.styleDefault();
    };
    ShopingPage.prototype.isFieldInvalid = function (field) {
        return ((!this.profileForm.get(field).valid && this.profileForm.get(field).touched) ||
            (this.profileForm.get(field).untouched && this.formSubmitAttempt));
    };
    ShopingPage.prototype.vvv = function () {
        this.keyboard.show();
    };
    ShopingPage.prototype.requestSender = function () {
        var _this = this;
        this.storage.get('mono').then(function (val) {
            _this.UserId = val;
            var obj = {
                LoginId: _this.UserId
            };
            var loading = _this.loadingCtrl.create({ spinner: 'dots' });
            loading.present();
            _this.db.getProfileByLogin(obj).subscribe(function (data) {
                _this.UserDetails = JSON.parse(data.json());
                if (_this.UserDetails.ProfilePicPath == '')
                    _this.profileImage = _this.DefaultImg;
                else
                    _this.profileImage = _this.db.imageUrl + _this.UserDetails.ProfilePicPath;
                _this.LoginId = _this.UserDetails.UserName;
                _this.MobileNo = _this.UserDetails.MobileNo;
                _this.FirstName = _this.UserDetails.FirstName;
                _this.LastName = _this.UserDetails.LastName;
                _this.EmailId = _this.UserDetails.EmailId;
            }, function (err) { return console.error("Error in Record Page" + err.message); }, function () {
                loading.dismiss();
            });
        });
    };
    ShopingPage.prototype.UpdateProfile = function () {
        var _this = this;
        if (this.profileForm.valid) {
            this.formSubmitAttempt = true;
            var fd = new FormData();
            fd.append('ProfilePicPath', "");
            fd.append('FirstName', this.FirstName);
            fd.append('LastName', this.LastName);
            fd.append('EmailId', this.EmailId);
            fd.append('MobileNo', this.MobileNo);
            fd.append('LoginId', this.LoginId);
            fd.append('UserId', this.UserDetails.UserId);
            var loading_1 = this.loadingCtrl.create({ spinner: 'dots' });
            loading_1.present();
            this.db.UpdateProfile(fd).subscribe(function (data) {
                if (JSON.parse(data.json()).flag.toLowerCase() == 'true') {
                    _this.db.TransectionPage(true, 'profile', "Profile updated successfully");
                    // alert("Profile updated successfully");
                }
                else {
                    alert(JSON.parse(data.json()).Message);
                }
            }, function (error) {
                alert("Unable to process");
            }, function () {
                loading_1.dismiss();
            });
        }
        else {
            alert('Please enter all profile details.');
        }
    };
    ShopingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({ selector: 'page-shoping',template:/*ion-inline-start:"/Users/rohitshukla/Desktop/new/flipprr/src/pages/shoping/shoping.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>profile</ion-title>\n    <ion-buttons right>\n      <button ion-button icon-only (click)="cp();">\n        <img alt="logo" height="25" width="25" src="assets/icon/cpicon.png">\n      </button>\n      <button ion-button icon-only (click)="logout();">\n        <ion-icon name="power"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-scroll overflow-scroll="false" has-bouncing="false" scroll="false">\n\n  <ion-scroll has-bouncing="false" style="width:100%;height:100%;" scrollY="true">\n\n\n  <ion-item id="login">\n    <ion-label floating>login id</ion-label>\n    <ion-input name=\'userg\' [(ngModel)]="LoginId" type="text" disabled></ion-input>\n  </ion-item>\n\n  <ion-item id="mobi">\n    <ion-label floating>mobile number</ion-label>\n    <ion-input name=\'monog\' [(ngModel)]="MobileNo" type="number" disabled></ion-input>\n  </ion-item>\n\n  <form [formGroup]="profileForm">\n    <ion-item id="firstname">\n      <ion-label floating >first name</ion-label>\n      <ion-input name=\'fname\' (click)="vvv();"  [(ngModel)]="FirstName" [formControl]="profileForm.controls[\'fname\']" type="text"></ion-input>\n    </ion-item>\n    <!-- <ion-label *ngIf="isFieldInvalid(\'fname\')">first name must be entered.</ion-label> -->\n\n    <ion-item id="lastname">\n      <ion-label floating>Last Name</ion-label>\n      <ion-input name=\'lname\' [(ngModel)]="LastName" [formControl]="profileForm.controls[\'lname\']" type="text"></ion-input>\n    </ion-item>\n    <!-- <ion-label *ngIf="isFieldInvalid(\'lname\')">last name must be entered.</ion-label> -->\n    <ion-item id="mobi">\n      <ion-label floating>email id</ion-label>\n      <ion-input name=\'emid\' [(ngModel)]="EmailId" [formControl]="profileForm.controls[\'emid\']" type="Email"></ion-input>\n    </ion-item>\n    <!-- <ion-label *ngIf="isFieldInvalid(\'emid\')">please enter valid email id.</ion-label> -->\n    <br>\n    <button ion-button full color="light" round class="login" style="color: rgb(109, 154, 255);" (click)="UpdateProfile();" [disabled]="!profileForm.valid">update</button>\n\n  </form>\n  </ion-scroll>\n</ion-content>'/*ion-inline-end:"/Users/rohitshukla/Desktop/new/flipprr/src/pages/shoping/shoping.html"*/ }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__ionic_native_keyboard__["a" /* Keyboard */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]])
    ], ShopingPage);
    return ShopingPage;
}());

//# sourceMappingURL=shoping.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__send_send__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__request_request__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__addmoney_addmoney__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__vaddmoney_vaddmoney__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_rest_rest__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_user_login_user__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var WalletPage = /** @class */ (function () {
    function WalletPage(appCtrl, statusBar, navCtrl, loadingCtrl, navParams, db, storage) {
        this.appCtrl = appCtrl;
        this.statusBar = statusBar;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.db = db;
        this.storage = storage;
        // this.screenOrientation.unlock();
        this.statusBar.styleDefault();
        this.readonly = true;
    }
    WalletPage.prototype.vadd = function () { this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__vaddmoney_vaddmoney__["a" /* VaddmoneyPage */]); };
    WalletPage.prototype.logout = function () {
        this.storage.set('user', null);
        this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_9__login_user_login_user__["a" /* LoginUserPage */]);
    };
    WalletPage.prototype.ionViewDidLoad = function () {
        this.requestSender();
        this.statusBar.styleDefault();
    };
    WalletPage.prototype.ionViewWillEnter = function () {
        this.statusBar.styleDefault();
    };
    WalletPage.prototype.doRefresh = function (refresher) {
        console.log('Begin operation', refresher);
        this.ionViewDidLoad();
        setTimeout(function () {
            console.log('operation has ended');
            refresher.complete();
        }, 2000);
    };
    WalletPage.prototype.requestSender = function () {
        var _this = this;
        this
            .storage
            .get('user')
            .then(function (val) {
            var obj = {
                UserId: val
            };
            var loading = _this
                .loadingCtrl
                .create({ spinner: 'dots', });
            loading.present();
            _this
                .db
                .availableBalance(obj)
                .subscribe(function (data) {
                _this.accountbalance = JSON
                    .parse(data.json())
                    .AvailableBalance;
                _this.rewardbalance = JSON
                    .parse(data.json())
                    .RewardBalance;
                _this.bal = (parseFloat(_this.accountbalance) + parseFloat(_this.rewardbalance));
            }, function (err) { return console.error("Error in Record Page" + err.message); }, function () {
                loading.dismiss();
            });
        });
    };
    WalletPage.prototype.requestsend = function () {
        var loading = this
            .loadingCtrl
            .create({ spinner: 'dots', duration: 2000 });
        loading.present();
        this
            .navCtrl
            .push(__WEBPACK_IMPORTED_MODULE_3__request_request__["a" /* RequestPage */]);
    };
    WalletPage.prototype.moneysend = function () {
        var loading = this
            .loadingCtrl
            .create({ spinner: 'dots', duration: 2000 });
        loading.present();
        this
            .navCtrl
            .push(__WEBPACK_IMPORTED_MODULE_2__send_send__["a" /* SendPage */]);
    };
    WalletPage.prototype.addmoney = function () { this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__addmoney_addmoney__["a" /* AddmoneyPage */]); };
    WalletPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({ selector: 'page-wallet',template:/*ion-inline-start:"/Users/rohitshukla/Desktop/new/flipprr/src/pages/wallet/wallet.html"*/'\n\n<ion-header>\n  <ion-navbar>\n    <ion-title>wallet</ion-title>\n    <ion-buttons right>\n      <button ion-button icon-only (click)="logout();">\n        <ion-icon name="power"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding class="card-background-page" class="con">\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <!-- <ion-grid> -->\n    <ion-row>\n      <ion-col col-12 style="padding:0px;">\n        <ion-input placeholder="Amount" [readonly]="readonly" clearInput text-center id="amt" type="text" value="{{bal | currency :\'&#8377;\'}}"\n          style="border-radius: 20px;"></ion-input>\n      </ion-col>\n    </ion-row>\n\n    <ion-row style="margin-top:2%;">\n      <ion-col col-md-5 style="text-align:center;border: 3px solid #fff;border-radius: 30px;" (click)="moneysend();">\n        <ion-icon name="paper-plane"></ion-icon>\n        <br>\n        <a style="font-size:160%;color:white;">send</a>\n      </ion-col>\n      <ion-col col-md-5 push-md-3 style="text-align:center;border: 3px solid #fff;border-radius: 30px;margin-left:3%" (click)="requestsend();">\n        <ion-icon name="paper-plane" style="transform: rotate(180deg);">\n        </ion-icon>\n        <br>\n        <a style="font-size:160%;color:white;">request</a>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class="card-title" style="border-radius: 30px;margin-top:3%;" (click)="addmoney();">\n      <ion-col col-5>\n        <img src="assets/icon/addmoney.png" height="80px" />\n      </ion-col>\n      <ion-col col-7>\n        <p style="padding-right: 0%;">add money</p>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class="card-title" style="border-radius: 30px;margin-top:3%;" (click)="vadd();">\n      <ion-col col-5 style="margin: auto;">\n        <img src="assets/icon/vou.png" height="40px" />\n      </ion-col>\n      <ion-col col-7>\n        <p style="padding-right: 0%;">add voucher</p>\n      </ion-col>\n    </ion-row>\n\n  <!-- </ion-grid> -->\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/rohitshukla/Desktop/new/flipprr/src/pages/wallet/wallet.html"*/ }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */]])
    ], WalletPage);
    return WalletPage;
}());

//# sourceMappingURL=wallet.js.map

/***/ })

},[218]);
//# sourceMappingURL=main.js.map