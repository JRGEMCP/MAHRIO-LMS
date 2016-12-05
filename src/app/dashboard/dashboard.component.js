import { Component } from '@angular/core';

import template from './dashboard.template.html';
import style from './dashboard.style.scss';

@Component({
  selector: 'dashboard',
  template,
  styles: [style],
})
export class Dashboard {
  constructor() {
    this.message = 'Dashboard';
  }
}
