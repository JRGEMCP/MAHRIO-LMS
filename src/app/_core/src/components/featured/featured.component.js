import { Component } from '@angular/core';

import template from './featured.template.html';
@Component({
  selector: 'featured',
  template,
  inputs: ['l','data','prefix']
})

export class Featured {
  ngOnInit(){

  }
}