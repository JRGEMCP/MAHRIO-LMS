import { Component, EventEmitter } from '@angular/core';

import template from './top.template.html';
import style from './top.style.scss';

@Component({
  selector: 'marketing-top-nav',
  template,
  styles: [style],
  inputs: ['l','fixed'],
  outputs: ['togglemenu']
})

export class MarketingTopNav {
  constructor(){
    this.togglemenu = new EventEmitter();
    this.model = '';
    this.isCollapsed = true;
  }

  anyClick(){
    this.isCollapsed = true;
    this.togglemenu.emit(this.isCollapsed);
  }
}
