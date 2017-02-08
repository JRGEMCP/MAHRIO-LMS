import { Component } from '@angular/core';

import template from './conversation.template.html';

@Component({
  selector: 'conversation',
  template,
  inputs: ['chats'],
})

export class Conversation {
  constructor() {
    this.message = 'Conversations';
  }
}
