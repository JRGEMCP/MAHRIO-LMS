import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import 'rxjs/add/operator/map';

import { CapitalizePipe } from './core/pipes/capitalize.pipe';
import { EncodeURIPipe } from './core/pipes/encore-uri.pipe';

import { AppRoutes } from './app.routes';

import { MahrioApp } from './app.component';
import { Conversation } from './conversation/conversation.component';
import { Dashboard } from './dashboard/dashboard.component';
import { Network } from './network/network.component';
import { NetworkRecentProgress } from './network/recent-progress/recent-progress.component';
import { NetworkRewards } from './network/rewards/rewards.component';
import { NetworkMembership } from './network/membership/membership.component';
import { NetworkCheckpoints } from './network/checkpoints/checkpoints.component';
import { NetworkObjectives } from './network/objectives/network-objectives.component';
import { NetworkList } from './network/list/network-list.component';
import { NetworkShow } from './network/show/network-show.component';
import { User } from './user/user.component';

import { MiddleAlign } from './core/directives/middle-align/middle-align.directive';
import { NgbdStarRating } from './core/directives/rating/rating.directive';

import { TopNavigation } from './core/layout/top-navigation.component';
import { LeftNavigation } from './core/layout/left-navigation.component';
import { Error404 } from './error/error-404.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes),
    NgbModule.forRoot(),
  ],
  declarations: [
    MahrioApp,
    Conversation,
    Dashboard,
    Network,
    NetworkRecentProgress,
    NetworkRewards,
    NetworkMembership,
    NetworkCheckpoints,
    NetworkObjectives,
    NetworkList,
    NetworkShow,
    MiddleAlign,
    NgbdStarRating,
    CapitalizePipe,
    EncodeURIPipe,
    User,
    TopNavigation,
    LeftNavigation,
    Error404,
  ],
  bootstrap: [MahrioApp],
})
export class AppModule {
}
