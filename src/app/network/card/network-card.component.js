import { Component } from '@angular/core';

import template from './network-card.template.html';
import style from './network-card.style.scss';

@Component({
  selector: 'network-card',
  template,
  styles: [style],
  inputs: ['networks'],
})

export class NetworkCard {
  constructor() {
  }
}
