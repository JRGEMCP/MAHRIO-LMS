import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MiddleAlign } from '../../core/directives/middle-align/middle-align.directive';

import template from './network-show.template.html';
import style from './network-show.style.scss';

@Component({
  selector: 'network-show',
  template,
  styles: [style],
  directives: [MiddleAlign],
})

export class NetworkShow {
  static get parameters() {
    return [ActivatedRoute];
  }
  constructor(Route) {
    this.route = Route;
  }
  ngOnInit() {
    this.title = this.route.params.value.title;
  }
}
