import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from './student.service';
import template from './student.template.html';
@Component({
  selector: 'student-component',
  template
})

export class StudentComponent {
  static get parameters(){
    return [ActivatedRoute, Router, StudentService];
  }

  constructor(route, router, studentService){
    this.route = route;
    this.router = router;
    this.submenu = false;
    console.log(studentService, 'IN HERE');
    this.asideSubMenu = studentService.schema('aside-sidemenu');
    this.topMenu = studentService.schema('top-menu');


    if( route.params.value && route.params.value.title  ) {
      this.title = route.params.value.title;
      this.view = 'courses';
      this.show = true;
    } else {
      this.view = route.params.value.view;
    }
  }

  ngOnInit(){
    switch( this.view ) {
      case 'dashboard':
      case 'courses':
      case 'classmates':
      case 'chats':
        console.log( this.view );
        break;
      default:
        //this.router.navigateTo('s/dashboard');
        //redirect to dashboard
    }
    this.router.events.subscribe((event) => {
      if( event.state ) {
        var match = event.url.match( /s\/(.*?)$/ );
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