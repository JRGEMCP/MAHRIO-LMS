import { Component } from '@angular/core';

import template from './rating.template.html';

@Component({
  selector: 'ngbd-star-rating',
  template,
  styles: [`
    .star {
      position: relative;
      display: inline-block;
      color: #d3d3d3;
    }
    .full {
      color: rgb(247,167,56);
    }
    .half {
      position: absolute;
      display: inline-block;
      overflow: hidden;
      color: rgb(247,167,56);
    }
  `],
})
export class NgbdStarRating {
  currentRate = 3.14;
}
