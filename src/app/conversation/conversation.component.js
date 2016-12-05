import { Component } from '@angular/core';

import template from './conversation.template.html';
import style from './conversation.style.scss';

@Component({
  selector: 'conversation',
  template,
  styles: [style],
})

export class Conversation {
  constructor() {
    this.message = 'Conversations';
  }
}
