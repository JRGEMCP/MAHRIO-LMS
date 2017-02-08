import { Component } from '@angular/core';

import template from './jumbotron.template.html';
import style from './jumbotron.style.scss';
@Component({
  selector: 'jumbotron',
  template,
  styles: [style],
  inputs: ['l']
})
export class Jumbotron {
  ngOnInit(){

  }
}
