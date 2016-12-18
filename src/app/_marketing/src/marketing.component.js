import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MarketingService } from './marketing.service';
import template from './marketing.template.html';

@Component({
  template
})

export class MarketingComponent {
  static get parameters(){
    return [ActivatedRoute, Router, MarketingService];
  }
  constructor( route, router, marketingService ){
    this.view = route.params.value.view;
    this.router = router;

    this.asideSubMenu = marketingService.schema('aside-sidemenu');
    this.topMenu = marketingService.schema('top-menu');
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
  toggleMenu(){
    this.submenu = !this.submenu;
    this.searchmenu = false;
  }
  toggleSearch(){
    this.submenu = false;
    this.searchmenu = !this.searchmenu;
  }
}