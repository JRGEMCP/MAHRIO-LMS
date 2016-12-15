import { Component } from '@angular/core';

import template from './left.template.html';
//import style from './left.style.scss';

@Component({
  selector: 'owner-left-nav',
  template
})

export class OwnerLeftNav {
  beforeChange($event) {
    $event.preventDefault();
  }
}
