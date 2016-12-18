import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import template from './show.template.html';
import style from './show.style.scss';

@Component({
  selector: 'show',
  template,
  styles: [style],
  inputs: ['network']
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
