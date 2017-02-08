import { Injectable } from '@angular/core';

@Injectable()
export class StudentService{
  schema( key ) {
    switch( key ) {
      case 'aside-sidemenu':
        return [{
          label: 'Dashboard',
          icon: 'fa-bar-chart',
          link: '/s/dashboard'
        },{
          label: 'Courses',
          icon: 'fa-mortar-board',
          link: '/s/courses'
        },{
          label: 'Classmates',
          icon: 'fa-users',
          link: '/s/classmates'
        },{
          label: 'Chats',
          icon: 'fa-comments',
          link: '/s/chats'
        }];
      case 'top-menu':
        return {
          brand: 'Students',
          link: '/s'
        };
      default:
    }
  }
}