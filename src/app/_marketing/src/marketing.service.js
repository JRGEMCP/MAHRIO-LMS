import { Injectable } from '@angular/core';

@Injectable()
export class MarketingService {
  schema( key ) {
    switch( key ) {
      case 'aside-sidemenu':
        return [{
          label: 'Home',
          icon: 'fa-home',
          link: '/'
        },{
          label: 'Courses',
          icon: 'fa-mortar-board',
          link: '/m/courses'
        },{
          label: 'Comrades',
          icon: 'fa-users',
          link: '/m/comrades'
        },{
          label: 'Conversations',
          icon: 'fa-comments',
          link: '/m/conversations'
        }];
      case 'top-menu':
        return {
          brand: ''
        };
      default:
    }
  }
}