import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AdjacentButtonInput } from './components/adjacent-button-input/adjacent-button-input.component';
import { Conversation } from './components/conversation/conversation.component';
import { Cards } from './components/card/cards.component';
import { List } from './components/list/list.component';
import { RecentProgress } from './components/progress/progress.component';
import { Rewards } from './components/rewards/rewards.component';

@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [
    Conversation,
    Cards,
    List,
    RecentProgress,
    Rewards,
    AdjacentButtonInput,
  ],
  exports: [
    Conversation,
    Cards,
    List,
    RecentProgress,
    Rewards,
    AdjacentButtonInput,
  ]
})

export class CoreModule {

}