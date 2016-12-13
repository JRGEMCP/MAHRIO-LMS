import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import template from './instructor.template.html';

@Component({
  selector: 'instructor-component',
  template
})

export class InstructorComponent {
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
      case 'dashboard':
      case 'networks':
      case 'users':
      case 'chats':
        console.log( this.view );
        break;
      default:
        //this.router.navigateTo('s/dashboard');
        //redirect to dashboard
    }
    this.router.events.subscribe((event) => {
      if( event.state ) {
        var match = event.url.match( /i\/(.*?)$/ );
        if( match && match.length > 1) {
          this.view = match[1];
        } else {
          this.view = 'dashboard';
        }
      }
    });
  }
}