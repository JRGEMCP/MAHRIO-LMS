import { Component } from '@angular/core';
import { AppProvider } from '../../../../../app.provider';
import template from './home.template.html';

@Component({
  selector: 'marketing-home',
  template
})

export class MarketingHome {
  static get parameters(){
    return [AppProvider];
  }
  constructor( appProv ){
    this.nApi = appProv;
  }
  ngOnInit(){
    this.tron = {
      title: 'Knowledge is Power. Period.',
      lead: '',
      link: '/register',
      linkLabel: 'Sign Up'
    };
    this.prefix = '/m/courses/';
    this.networks = this.nApi.getNetworks('featured');
    console.log( this.networks );
  }

}