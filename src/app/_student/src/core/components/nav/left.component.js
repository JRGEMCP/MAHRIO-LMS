import { Component } from '@angular/core';

import template from './left.template.html';
//import style from './left.style.scss';

@Component({
  selector: 'student-left-nav',
  template
})

export class StudentLeftNav {
  beforeChange($event) {
    $event.preventDefault();
  }
}
