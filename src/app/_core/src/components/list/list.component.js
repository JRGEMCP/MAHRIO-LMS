import { Component } from '@angular/core';

import template from './list.template.html';
import style from './list.style.scss';

@Component({
  selector: 'list',
  template,
  styles: [style],
  inputs: ['networks'],
})

export class List {
  constructor() {
    this.network = 'Networks';
  }
}
