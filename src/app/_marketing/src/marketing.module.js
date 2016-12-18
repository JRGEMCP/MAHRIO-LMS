import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from '../../_core/src/core.module';

import { MarketingComponent } from './marketing.component';
import { SignIn } from './core/components/sign-in/sign-in.component';
import { Register } from './core/components/register/register.component';
import { MarketingNetworks } from './core/components/courses/networks.component';
import { MarketingChats } from './core/components/conversations/chats.component';
import { MarketingUsers } from './core/components/comrades/users.component';
import { MarketingRoutes } from './marketing.routes';

import { MarketingTopNav } from './core/components/nav/top.component';
import { MarketingCarousel } from './core/components/carousel/carousel.component';

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
    MarketingCarousel,
    SignIn,
    Register,
    MarketingNetworks,
    MarketingChats,
    MarketingUsers,
    MarketingComponent,
  ],
  providers: [
    MarketingService
  ],
  bootstrap: [MarketingComponent]
})

export class MarketingModule {}