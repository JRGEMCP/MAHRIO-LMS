import { Component } from '@angular/core';

import template from './progress.template.html';
import style from './progress.style.scss';

@Component({
  selector: 'recent-progress',
  template,
  styles: [style],
})
export class RecentProgress {
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
