import { Component } from '@angular/core';

import template from './objectives.template.html';

@Component({
  selector: 'objectives',
  template,
})

export class Objectives {
  ngOnInit() {
    this.objectives = [{
      icon: 'fa-star',
      iconClass: 's30 bg-red',
      name: 'Basics of GIT and how to become a STAR',
    }, {
      icon: 'fa-database',
      iconClass: 's30 bg-green',
      name: 'Database connections & some other nice features.',
    }];
  }
}
