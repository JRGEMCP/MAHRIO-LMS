import { Component } from '@angular/core';

import template from './left.template.html';
//import style from './left.style.scss';

@Component({
  selector: 'student-left-nav',
  template
})

export class StudentLeftNav {
  constructor(){
    this.isCollapsed = true;
  }
  beforeChange($event) {
    $event.preventDefault();
  }
}
