import { Component } from '@angular/core';

import template from './dashboard.template.html';
import style from './dashboard.style.scss';

@Component({
  selector: 'student-dashboard',
  template,
  styles: [style],
})
export class StudentDashboard {
  constructor() {
    this.heading = 'Dashboard'
    this.message = 'Your subscription ends on <b>25 February 2015</b>';
    this.icon = 'fa-credit-card';
    this.buttonLabel = 'Upgrade';
  }
}
