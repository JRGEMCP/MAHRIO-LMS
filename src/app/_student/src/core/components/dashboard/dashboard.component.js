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
    this.message = 'Dashboard';
  }
}
