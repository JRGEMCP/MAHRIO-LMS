import { Component } from '@angular/core';

import template from './network-list.template.html';
import style from './network-list.style.scss';

@Component({
  selector: 'network-list',
  template,
  styles: [style],
  inputs: ['networks'],
})

export class NetworkList {
  constructor() {
    this.network = 'Networks';
  }
}
