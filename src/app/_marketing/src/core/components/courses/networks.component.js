import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppProvider } from '../../../../../app.provider';

import template from './networks.template.html';
import style from './networks.style.scss';


@Component({
  selector: 'marketing-networks',
  template,
  styles: [style],
  providers: [AppProvider],
  inputs: ['show']
})

export class MarketingNetworks {
  static get parameters(){
    return [AppProvider, ActivatedRoute];
  }
  constructor( appProv, rte ){
    this.nApi = appProv;
    this.title = rte.params.value.title;
    if( this.title ) {
      this.show = true;
    }
  }
  ngOnInit(){
    this.atr = this.nApi.getAttributes();
    this.cat = this.nApi.getCategories();
    if( this.show ) {
      this.network = this.nApi.getNetwork( this.title );
    } else {
      this.networks = this.nApi.getNetworks();
    }
  }
}