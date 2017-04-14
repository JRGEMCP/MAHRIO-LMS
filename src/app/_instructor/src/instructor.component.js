import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InstructorService } from './instructor.service';
import template from './instructor.template.html';

@Component({
  selector: 'instructor-component',
  template
})

export class InstructorComponent {
  static get parameters(){
    return [ActivatedRoute, Router, InstructorService];
  }

  constructor(route, router, instructorService){
    this.route = route;
    this.router = router;
    this.view = route.params.value.view;
    this.asideSubMenu = instructorService.schema('aside-sidemenu');
    this.topMenu = instructorService.schema('top-menu');
  }

  ngOnInit(){
    switch( this.view ) {
      case 'dashboard':
      case 'courses':
      case 'students':
      case 'discussions':
      case 'articles':
        break;
      default:
        //this.router.navigateTo('i/dashboard');
        // or redirect to i/404
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
  toggleMenu(){
    this.submenu = !this.submenu;
    this.searchmenu = false;
  }
  toggleSearch(){
    this.submenu = false;
    this.searchmenu = !this.searchmenu;
  }
}
