import { Component } from '@angular/core';

import template from './networks.template.html';

@Component({
  selector: 'owner-networks',
  template,
})
export class OwnerNetworks {
  constructor() {
    this.message = 'Courses';
    this.networks = [];
    this.currentPage = 1;
  }

  pageChange() {
    this.networks = [];
    setTimeout(() => {
      this.networks = [[{
        title: 'Github Webhooks for Beginners',
        rating: 3,
        description: 'Each webhook can be installed on an organization or a specific repository. ' +
        'Once installed, they will be triggered each time one or more subscribed events',
        instructor: 'Adrian Demian',
      }, {
        title: 'CSS with LESS Processing',
        rating: 3,
        description: 'Less is a CSS pre-processor, meaning that it extends the CSS language, ' +
        'adding features that allow variables, mixins, functions and many other techniques.',
        instructor: 'Adrian Demian',
      }, {
        title: 'Vagrant Portable Environments',
        rating: 3,
        description: 'Vagrant enables users to create and configure lightweight, reproducible, ' +
        'and portable development environments.',
        instructor: 'Adrian Demian',
      }], [{
        title: 'WordPress Theme Development',
        rating: 3,
        description: 'This course is about developing WordPress Themes. If you wish to learn ' +
        'more about how to install and use Themes, review Using Themes.',
        instructor: 'Adrian Demian',
      }, {
        title: 'Browserify: Writing Modular JavaScript',
        rating: 3,
        description: 'The basics of writing modules for the browser using node.js core ' +
        'modules and modules. A very thorough introduction to using npm, Browserify, and Grunt.js.',
        instructor: 'Adrian Demian',
      }, {
        title: 'Super Easy Online Payments with Stripe',
        rating: 3,
        description: 'Stripe is a suite of APIs that powers commerce for businesses ' +
        'of all sizes. We believe that payments is a problem rooted in code, not finance.',
        instructor: 'Adrian Demian',
      }]];
    }, 1000);
  }

  ngOnInit() {
    setTimeout(() => {
      this.networks = [[{
        title: 'Github Webhooks for Beginners',
        rating: 3,
        description: 'Each webhook can be installed on an organization or a specific repository. ' +
        'Once installed, they will be triggered each time one or more subscribed events',
        instructor: 'Adrian Demian',
      }, {
        title: 'CSS with LESS Processing',
        rating: 3,
        description: 'Less is a CSS pre-processor, meaning that it extends the CSS language, ' +
        'adding features that allow variables, mixins, functions and many other techniques.',
        instructor: 'Adrian Demian',
      }, {
        title: 'Vagrant Portable Environments',
        rating: 3,
        description: 'Vagrant enables users to create and configure lightweight, reproducible, ' +
        'and portable development environments.',
        instructor: 'Adrian Demian',
      }], [{
        title: 'WordPress Theme Development',
        rating: 3,
        description: 'This course is about developing WordPress Themes. If you wish to learn ' +
        'more about how to install and use Themes, review Using Themes.',
        instructor: 'Adrian Demian',
      }, {
        title: 'Browserify: Writing Modular JavaScript',
        rating: 3,
        description: 'The basics of writing modules for the browser using node.js core ' +
        'modules and modules. A very thorough introduction to using npm, Browserify, and Grunt.js.',
        instructor: 'Adrian Demian',
      }, {
        title: 'Super Easy Online Payments with Stripe',
        rating: 3,
        description: 'Stripe is a suite of APIs that powers commerce for businesses ' +
        'of all sizes. We believe that payments is a problem rooted in code, not finance.',
        instructor: 'Adrian Demian',
      }]];
    }, 1000);
  }
}
