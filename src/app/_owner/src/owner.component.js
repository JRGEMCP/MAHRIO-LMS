import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OwnerService } from './owner.service';
import template from './owner.template.html';

@Component({
  selector: 'owner-component',
  template
})

export class OwnerComponent {
  static get parameters(){
    return [ActivatedRoute, Router, OwnerService];
  }

  constructor(route, router, ownerService){
    this.route = route;
    this.router = router;
    this.view = route.params.value.view;

    this.asideSubMenu = ownerService.schema('aside-sidemenu');
    this.topMenu = ownerService.schema('top-menu');
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
  toggleMenu(){
    this.submenu = !this.submenu;
    this.searchmenu = false;
  }
  toggleSearch(){
    this.submenu = false;
    this.searchmenu = !this.searchmenu;
  }
}