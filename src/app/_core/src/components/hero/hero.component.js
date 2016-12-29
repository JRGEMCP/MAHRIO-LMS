import { Component } from '@angular/core';

import template from './hero.template.html';
import style from './hero.style.scss';

@Component({
  selector: 'hero',
  template,
  styles: [style],
  inputs: ['l']
})

export class Hero {

}