import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AdjacentButtonInput } from './components/adjacent-button-input/adjacent-button-input.component';
import { AsideSubmenu } from './components/aside-submenu/aside-submenu.component';
import { CardsHeader } from './components/card/header.component';
import { Cards } from './components/card/cards.component';
import { Checkpoints } from './components/checkpoints/checkpoints.component';
import { Conversation } from './components/conversation/conversation.component';
import { Hero } from './components/hero/hero.component';
import { Jumbotron } from './components/jumbotron/jumbotron.component';
import { Featured } from './components/featured/featured.component';
import { List } from './components/network/list/list.component';
import { MiddleAlign } from './components/middle-align/middle-align.component';
import { Milestone } from './components/milestone/milestone.component';
import { NetworkShow } from './components/network/show/show.component';
import { Objectives } from './components/objectives/objectives.component';
import { RecentProgress } from './components/progress/progress.component';
import { NgbdStarRating } from './components/rating/rating.component';
import { Rewards } from './components/rewards/rewards.component';
import { TopNavigation } from './components/top-navigation/top-navigation.component';
import { SelectComp } from './components/select/select.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    NgbModule.forRoot(),
  ],
  declarations: [
    Conversation,
    CardsHeader,
    Cards,
    List,
    RecentProgress,
    Rewards,
    AdjacentButtonInput,
    NetworkShow,
    TopNavigation,
    AsideSubmenu,
    MiddleAlign,
    NgbdStarRating,
    Checkpoints,
    Objectives,
    SelectComp,
    Hero,
    Jumbotron,
    Featured,
    Milestone,
  ],
  exports: [
    Conversation,
    CardsHeader,
    Cards,
    List,
    RecentProgress,
    Rewards,
    AdjacentButtonInput,
    NetworkShow,
    TopNavigation,
    AsideSubmenu,
    MiddleAlign,
    NgbdStarRating,
    Checkpoints,
    Objectives,
    SelectComp,
    Hero,
    Jumbotron,
    Featured,
    Milestone,
  ]
})

export class CoreModule {

}
