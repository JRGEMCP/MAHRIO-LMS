import { Injectable } from '@angular/core';

@Injectable()
export class OwnerService{
  schema( key ) {
    switch( key ) {
      case 'aside-sidemenu':
        return [{
          label: 'Analysis',
          icon: 'fa-bar-chart',
          link: '/o/analysis'
        },{
          label: 'Networks',
          icon: 'fa-mortar-board',
          link: '/o/networks'
        },{
          label: 'Users',
          icon: 'fa-users',
          link: '/o/users'
        },{
          label: 'Support',
          icon: 'fa-comments',
          link: '/o/support'
        }];
        break;
      case 'top-menu':
        return {
          brand: 'Owner'
        };
    }
  }
}