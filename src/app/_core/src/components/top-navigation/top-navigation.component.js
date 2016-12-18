import { Component, EventEmitter } from '@angular/core';

import template from './top-navigation.template.html';
import style from './top-navigation.style.scss';
@Component({
  selector: 'top-navigation',
  template,
  styles: [style],
  inputs: ["toggleflag", "menu"],
  outputs: ["togglemenu", "togglesearch"]
})

export class TopNavigation{
  constructor(){
    this.togglemenu = new EventEmitter();
    this.togglesearch = new EventEmitter();
  }
}