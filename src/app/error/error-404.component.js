import { Component } from '@angular/core';
import template from './error-404.template.html';

@Component({
  template,
})

export class Error404 {
  constructor() {
    this.message = '404';
  }
}
