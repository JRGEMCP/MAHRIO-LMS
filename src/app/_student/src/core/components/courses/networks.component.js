import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppProvider } from '../../../../../app.provider';

import template from './networks.template.html';

@Component({
  selector: 'student-networks',
  template,
  inputs: ['show']
})
export class StudentNetworks {
  static get parameters(){
    return [ActivatedRoute, AppProvider];
  }
  constructor( route, appProv ) {
    this.message = 'Courses';
    this.networks = [];
    this.currentPage = 1;
    this.route = route;
    this.nApi = appProv;

  }

  ngOnInit(){
    this.card = true;
    setTimeout(() => {
      this.networks = this.nApi.getNetworks();
    }, 1000);
  }

  pageChange() {
    this.networks = [];
    setTimeout(() => {
      this.networks = this.nApi.getNetworks();
    }, 1000);
  }
}
