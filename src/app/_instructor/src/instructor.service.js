import { Injectable } from '@angular/core';

@Injectable()
export class InstructorService{
  schema( key ) {
    switch( key ) {
      case 'aside-sidemenu':
        return [{
          label: 'Dashboard',
          icon: 'fa-bar-chart',
          link: '/i/dashboard'
        },{
          label: 'Courses',
          icon: 'fa-mortar-board',
          link: '/i/courses'
        },{
          label: 'Students',
          icon: 'fa-users',
          link: '/i/students'
        },{
          label: 'Discussions',
          icon: 'fa-comments',
          link: '/i/discussions'
        }];
      case 'top-menu':
        return {
          brand: 'Instructor'
        };
      default:
    }
  }
}