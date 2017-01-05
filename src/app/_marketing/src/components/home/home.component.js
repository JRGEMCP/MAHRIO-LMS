import { Component } from '@angular/core';
import { AppProvider } from '../../../../app.provider';
import template from './home.template.html';
import style from './home.style.scss';
@Component({
  selector: 'marketing-home',
  template,
  styles: [style],
  inputs: ['l']
})

export class MarketingHome {
  static get parameters(){
    return [AppProvider];
  }
  constructor( appProv ){
    this.nApi = appProv;
  }
  ngOnInit(){
    this.prefix = '/m/courses/';
    this.networks = this.nApi.getNetworks().slice(0,6);
    this.sections = this.l.sections;
  }
}