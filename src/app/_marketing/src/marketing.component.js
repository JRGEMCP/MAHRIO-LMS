import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MarketingService } from './marketing.service';
import { MarketingMock } from './marketing.locale';
import template from './marketing.template.html';

@Component({
  selector: 'marketing-component',
  template
})

export class MarketingComponent {
  static get parameters(){
    return [ActivatedRoute, Router, MarketingService, MarketingMock];
  }
  constructor( route, router, marketingService, mock ){
    this.lang = 'en-US';
    //mock.setLanguage( this.lang );
    this.mock = mock;
    this.l = {
      nav: mock.getLanguage('nav'),
      session: mock.getLanguage('session'),
      home: mock.getLanguage('home'),
      user: mock.getLanguage('user')
    };

    this.router = router;
    this.asideSubMenu = marketingService.schema('aside-sidemenu');
    this.topMenu = marketingService.schema('top-menu');

    if( route.params.value && route.params.value.id ) {
      this.view = 'register';
      this.id = route.params.value.id;
    } else if( route.params.value && route.params.value.title  ) {
      this.title = route.params.value.title;
      this.view = 'courses';
      this.fixed = true;
    } else {
      this.view = route.params.value.view;
    }
  }
  ngOnInit(){
    switch( this.view ) {
      case 'courses':
      case 'register':
      case 'login':
      case 'conversations':
      case 'comrades':
      case 'reset-password':
      case 'account-activation':
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
  toggleMenu( ){
    this.menu = !this.menu;
  }
  toggleSearch(){

  }
}