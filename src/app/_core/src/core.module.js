import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AsideSubmenu } from './components/aside-submenu/aside-submenu.component';
import { AdjacentButtonInput } from './components/adjacent-button-input/adjacent-button-input.component';
import { Conversation } from './components/conversation/conversation.component';
import { Cards } from './components/card/cards.component';
import { List } from './components/network/list/list.component';
import { NetworkShow } from './components/network/show/show.component';
import { RecentProgress } from './components/progress/progress.component';
import { Rewards } from './components/rewards/rewards.component';
import { TopNavigation } from './components/top-navigation/top-navigation.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    NgbModule.forRoot(),
  ],
  declarations: [
    Conversation,
    Cards,
    List,
    RecentProgress,
    Rewards,
    AdjacentButtonInput,
    NetworkShow,
    TopNavigation,
    AsideSubmenu,
  ],
  exports: [
    Conversation,
    Cards,
    List,
    RecentProgress,
    Rewards,
    AdjacentButtonInput,
    NetworkShow,
    TopNavigation,
    AsideSubmenu,
  ]
})

export class CoreModule {

}