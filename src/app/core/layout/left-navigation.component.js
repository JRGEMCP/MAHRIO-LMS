import { Component } from '@angular/core';

import template from './left-navigation.template.html';
import style from './left-navigation.style.scss';

@Component({
  selector: 'left-navigation',
  template,
  styles: [style],
})

export class LeftNavigation {
  beforeChange($event) {
    if ($event.panelId === '1' || $event.panelId === '5') {
      $event.preventDefault();
    }
  }
}
