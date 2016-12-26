import { Component } from '@angular/core';
import { AppProvider } from '../../../../app.provider';
import template from './home.template.html';

@Component({
  selector: 'marketing-home',
  template,
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