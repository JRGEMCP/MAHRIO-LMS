import { Component } from '@angular/core';

import template from './register.template.html';
import style from '../../../styles/session.style.scss';
@Component({
  selector: 'register',
  template,
  styles: [style],
  inputs: ['l']
})

export class Register {
  constructor(){

  }
  ngOnInit(){
  }
}