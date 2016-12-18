import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AdjacentButtonInput } from './components/adjacent-button-input/adjacent-button-input.component';
import { Conversation } from './components/conversation/conversation.component';
import { Cards } from './components/card/cards.component';
import { List } from './components/network/list/list.component';
import { NetworkShow } from './components/network/show/show.component';
import { RecentProgress } from './components/progress/progress.component';
import { Rewards } from './components/rewards/rewards.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
  ],
  declarations: [
    Conversation,
    Cards,
    List,
    RecentProgress,
    Rewards,
    AdjacentButtonInput,
    NetworkShow,
  ],
  exports: [
    Conversation,
    Cards,
    List,
    RecentProgress,
    Rewards,
    AdjacentButtonInput,
    NetworkShow,
  ]
})

export class CoreModule {

}