import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MarketingComponent } from './marketing.component';
import { SignIn } from './core/components/sign-in/sign-in.component';
import { Register } from './core/components/register/register.component';
import { MarketingNetworks } from './core/components/networks/networks.component';
import { MarketingRoutes } from './marketing.routes';

import { MarketingTopNav } from './core/components/nav/top.component';
import { MarketingCarousel } from './core/components/carousel/carousel.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forChild( MarketingRoutes ),
    NgbModule.forRoot()
  ],
  declarations: [
    MarketingTopNav,
    MarketingCarousel,
    SignIn,
    Register,
    MarketingNetworks,
    MarketingComponent
  ],
  bootstrap: [MarketingComponent]
})

export class MarketingModule {}