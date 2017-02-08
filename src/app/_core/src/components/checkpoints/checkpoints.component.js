import { Component } from '@angular/core';

import template from './checkpoints.template.html';
import style from './checkpoints.style.scss';

@Component({
  selector: 'checkpoints',
  template,
  styles: [style],
})
export class Checkpoints {
  constructor() {
    this.headline = 'Quizzes';
    this.subhead = 'Your recent performance';
    this.checkpoints = [{
      name: 'Title of quiz goes here?',
      score: '5.8',
    }, {
      name: 'Title of quiz goes here?',
      score: '5.8',
    }];
  }
}
