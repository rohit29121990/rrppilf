import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, NgModule, enableProdMode} from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {Keyboard} from '@ionic-native/keyboard';
import {HttpModule} from '@angular/http';
import { MyApp } from './app.component';
import {HomePage} from '../pages/home/home';
import {LoginUserPage} from '../pages/login-user/login-user';
import {SignupPage} from '../pages/signup/signup';
import {TabmasterPage} from '../pages/tabmaster/tabmaster';
import {RestProvider } from '../providers/rest/rest';
import {SendPage} from '../pages/send/send';
import {RequestPage} from '../pages/request/request';
import {AddmoneyPage} from '../pages/addmoney/addmoney';
import {VaddmoneyPage} from '../pages/vaddmoney/vaddmoney';
import {IonicStorageModule} from '@ionic/storage';
import {PassResetPage} from '../pages/pass-reset/pass-reset'
import {WalletPage} from '../pages/wallet/wallet';
import {AccountsPage} from '../pages/accounts/accounts';
import { RecordPage } from '../pages/record/record';
import { ShopingPage } from '../pages/shoping/shoping';
import { RecordPageModule } from '../pages/record/record.module';
import { ShopingPageModule } from '../pages/shoping/shoping.module';
import { AccountsPageModule } from '../pages/accounts/accounts.module';
import { WalletPageModule } from '../pages/wallet/wallet.module';
import { SignerPage } from '../pages/signer/signer';
import {ScreenOrientation} from '@ionic-native/screen-orientation';
import {SocialSharing} from '@ionic-native/social-sharing';
enableProdMode();

@NgModule({
  declarations: [
    MyApp,
    HomePage,
LoginUserPage,
TabmasterPage,
SignupPage,
SendPage,
RequestPage,
AddmoneyPage,
VaddmoneyPage,
PassResetPage,
SignerPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
IonicModule.forRoot(MyApp, {
scrollPadding : false,
scrollAssist : true,
autoFocusAssist : false
}),
    IonicStorageModule.forRoot(),
    RecordPageModule,
    ShopingPageModule,
    AccountsPageModule,
    WalletPageModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
HomePage,
LoginUserPage,
SignupPage,
TabmasterPage,
SendPage,
RequestPage,
AddmoneyPage,
VaddmoneyPage,
PassResetPage,
RecordPage,
ShopingPage,
AccountsPage,
WalletPage,
SignerPage,

  ],
  providers: [
    StatusBar,
SplashScreen,
Keyboard,
SocialSharing,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
RestProvider,
// BlockAProvider,
ScreenOrientation,SignerPage
  ]
})
export class AppModule {}
