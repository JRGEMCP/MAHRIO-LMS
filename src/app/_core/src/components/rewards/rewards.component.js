import { Component } from '@angular/core';

import template from './rewards.template.html';
import style from './rewards.style.scss';

@Component({
  selector: 'rewards',
  template,
  styles: [style],
})
export class Rewards {
  constructor() {
    this.headline = 'Rewards';
    this.subhead = 'Your latest achievements';
    this.rewards = [{
      icon: 'fa-star',
      bgColor: 'bg-purple',
    }, {
      icon: 'fa-trophy',
      bgColor: 'bg-indigo',
    }, {
      icon: 'fa-mortar-board',
      bgColor: 'bg-green',
    }, {
      icon: 'fa-code-fork',
      bgColor: 'bg-orange',
    }, {
      icon: 'fa-diamond',
      bgColor: 'bg-red',
    }];
  }
}
