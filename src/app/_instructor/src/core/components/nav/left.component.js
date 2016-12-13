import { Component } from '@angular/core';

import template from './left.template.html';
//import style from './left.style.scss';

@Component({
  selector: 'instructor-left-nav',
  template
})

export class InstructorLeftNav {
  beforeChange($event) {
    $event.preventDefault();
  }
}
