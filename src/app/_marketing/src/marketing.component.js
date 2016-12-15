import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import template from './marketing.template.html';

@Component({
  template
})

export class MarketingComponent {
  static get parameters(){
    return [ActivatedRoute, Router];
  }
  constructor( route, router ){
    this.view = route.params.value.view;
    this.router = router;
  }
  ngOnInit(){
    switch( this.view ) {
      case 'courses':
      case 'register':
      case 'login':
      case 'conversations':
      case 'comrades':
        break;
      default:
        this.view = 'null';
      //this.router.navigateTo('m/dashboard');
      //or redirect to m/404
    }
    this.router.events.subscribe((event) => {
      if( event.state ) {
        var match = event.url.match( /m\/(.*?)$/ );
        if( match && match.length > 1) {
          this.view = match[1];
        }
      }
    });
  }
}