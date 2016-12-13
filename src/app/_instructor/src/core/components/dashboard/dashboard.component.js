import { Component } from '@angular/core';

import template from './dashboard.template.html';
import style from './dashboard.style.scss';

@Component({
  selector: 'instructor-dashboard',
  template,
  styles: [style],
})
export class InstructorDashboard {
  constructor() {
    this.message = 'Dashboard';
  }
}
