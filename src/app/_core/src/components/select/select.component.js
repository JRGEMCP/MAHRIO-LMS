import { Component } from '@angular/core';

import template from './select.template.html';
import style from './select.style.scss';

@Component({
  selector: 'select-comp',
  template,
  styles: [style],
  inputs: ['label', 'options', 'sclass']
})

export class SelectComp {
  constructor(){
    //this.selected = this.options[0].name;
  }

}