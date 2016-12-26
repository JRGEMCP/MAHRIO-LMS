import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from '../../_core/src/core.module';
import { MarketingMock } from './marketing.locale';
import { MarketingComponent } from './marketing.component';
import { SignIn } from './components/session/sign-in/sign-in.component';
import { Register } from './components/session/register/register.component';
import { ResetPassword } from './components/session/reset-password/reset-password.component';
import { AccountActivation } from './components/session/account-activation/account-activation.component';
import { MarketingNetworks } from './components/courses/networks.component';
import { MarketingChats } from './components/conversations/chats.component';
import { MarketingUsers } from './components/comrades/users.component';
import { MarketingRoutes } from './marketing.routes';

import { MarketingTopNav } from './components/nav/top.component';
import { MarketingHome } from './components/home/home.component';

import { MarketingService } from './marketing.service';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forChild( MarketingRoutes ),
    NgbModule.forRoot(),
    CoreModule
  ],
  declarations: [
    MarketingTopNav,
    MarketingHome,
    SignIn,
    Register,
    ResetPassword,
    AccountActivation,
    MarketingNetworks,
    MarketingChats,
    MarketingUsers,
    MarketingComponent,
  ],
  providers: [
    MarketingMock,
    MarketingService
  ],
  bootstrap: [MarketingComponent]
})

export class MarketingModule {}