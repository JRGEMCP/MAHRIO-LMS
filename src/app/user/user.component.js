import { Component } from '@angular/core';

import template from './user.template.html';
import style from './user.style.scss';

@Component({
  selector: 'user',
  template,
  styles: [style],
})

export class User {
  constructor() {
    this.message = 'Users';
  }
}
