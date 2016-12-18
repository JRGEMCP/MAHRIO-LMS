import { Component } from '@angular/core';

import template from './left.template.html';
import style from './left.style.scss';

@Component({
  selector: 'student-left-nav',
  template,
  styles: [style],
  inputs: ["togglemenu"]
})

export class StudentLeftNav {
  constructor(){
    var that = this;
    setInterval(function(){
      that.togglemenu = !that.togglemenu;
    }, 1000);
  }
  beforeChange($event) {
    $event.preventDefault();
  }
}
