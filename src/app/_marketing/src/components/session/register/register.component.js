import { Component } from '@angular/core';
import { AppProvider } from '../../../../../app.provider';

import template from './register.template.html';
import style from '../../../styles/session.style.scss';
@Component({
  selector: 'register',
  template,
  styles: [style],
  providers: [AppProvider],
  inputs: ['l','network']
})

export class Register {
  static get parameters(){
    return [AppProvider];
  }
  constructor( appProvider ){
    this.nApi = appProvider;
  }
  ngOnInit(){
    var id = Number(this.network);
    console.log( id );
    if( !id ){
      return;
    } else {
      this.hasNetwork = true;
      this.network = this.nApi.getNetwork( id );
      console.log( this.network );
    }
  }
}