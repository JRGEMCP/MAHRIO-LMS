import { Component, EventEmitter } from '@angular/core';

import template from './aside-submenu.component.html';
import style from './aside-submenu.style.scss';
@Component({
  selector: 'aside-submenu',
  template,
  styles: [style],
  inputs: ["toggleflag", "menu", "hidden"],
  outputs: ["togglemenu"]
})

export class AsideSubmenu {
  constructor(){
    this.togglemenu = new EventEmitter();
  }
  beforeChange($event) {
    $event.preventDefault();
  }
}
