import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import template from './owner.template.html';

@Component({
  selector: 'owner-component',
  template
})

export class OwnerComponent {
  static get parameters(){
    return [ActivatedRoute, Router];
  }

  constructor(route, router){
    this.route = route;
    this.router = router;
    this.view = route.params.value.view;
  }

  ngOnInit(){
    switch( this.view ) {
      case 'analysis':
      case 'networks':
      case 'users':
      case 'support':
        break;
      default:
        //this.router.navigateTo('s/analysis');
        //or redirect to o/404
    }
    this.router.events.subscribe((event) => {
      if( event.state ) {
        var match = event.url.match( /o\/(.*?)$/ );
        if( match && match.length > 1) {
          this.view = match[1];
        } else {
          this.view = 'analysis';
        }
      }
    });
  }
}