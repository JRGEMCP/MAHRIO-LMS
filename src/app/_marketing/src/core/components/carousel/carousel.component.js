import { Component } from '@angular/core';

import template from './carousel.template.html';

@Component({
  selector: 'marketing-carousel',
  template
})

export class MarketingCarousel {
  ngOnInit(){
    this.tron = {
      title: 'Knowledge is Power. Period.',
      lead: '',
      link: '/login',
      linkLabel: 'Sign Up'
    };
  }

}