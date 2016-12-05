import { Component } from '@angular/core';

import template from './recent-progress.template.html';
import style from './recent-progress.style.scss';

@Component({
  selector: 'network-recent-progress',
  template,
  styles: [style],
})
export class NetworkRecentProgress {
  constructor() {
    this.headline = 'Courses';
    this.subhead = 'Your recent courses';
    this.recentProgress = [{
      name: 'Basics of HTML',
      progress: 40,
    }, {
      name: 'Angular in Steps',
      progress: 70,
    }, {
      name: 'Bootstrap Foundations',
      progress: 20,
    }];
  }
}
