import { Component } from '@angular/core';

import template from './membership.template.html';
import style from './membership.style.scss';

@Component({
  selector: 'network-membership',
  template,
  styles: [style],
})
export class NetworkMembership {
  constructor() {
    this.message = 'Your subscription ends on <b>25 February 2015</b>';
    this.icon = 'fa-credit-card';
    this.buttonLabel = 'Upgrade';
  }
}
