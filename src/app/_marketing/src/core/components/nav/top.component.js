import { Component } from '@angular/core';

import template from './top.template.html';
import style from './top.style.scss';

@Component({
  selector: 'marketing-top-nav',
  template,
  styles: [style]
})

export class MarketingTopNav {
  constructor(){
    this.model = '';
    this.isCollapsed = true;
  }
}
