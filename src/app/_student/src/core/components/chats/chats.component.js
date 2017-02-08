import { Component } from '@angular/core';

import template from './chats.template.html';
@Component({
  selector: 'student-chats',
  template,
})

export class StudentChats {
  constructor(){
    this.conversation = [];
    this.label = {};
  }
  ngOnInit(){
    this.label = {
      button: {
        text: 'SEND'
      },
      input: {
        placeholder: 'Write message...'
      }
    };
    this.conversation = [
      {
        body: 'Each webhook can be installed on an organization or a specific repository.',
        _owner: {
          _profile: {
            lastName: 'John',
            firstName: 'Student'
          }
        },
        date: '2 mins ago'
      },
      {
        body: 'Less is a CSS pre-processor, meaning that it extends the CSS language, adding features that allow variables, mixins, functions and many other techniques. Vagrant enables users to create and configure lightweight, reproducible, and portable development environments.',
        _owner: {
          _profile: {
            lastName: 'Instructor',
            firstName: 'Juan'
          }
        },
        date: '3 mins ago'
      },
      {
        body: 'Each webhook can be installed on an organization or a specific repository.',
        _owner: {
          _profile: {
            lastName: 'John',
            firstName: 'Student'
          }
        },
        date: '2 mins ago'
      },
      {
        body: 'Less is a CSS pre-processor, meaning that it extends the CSS language, adding features that allow variables, mixins, functions and many other techniques. Vagrant enables users to create and configure lightweight, reproducible, and portable development environments.',
        _owner: {
          _profile: {
            lastName: 'Instructor',
            firstName: 'Juan'
          }
        },
        date: '3 mins ago'
      },
      {
        body: 'Each webhook can be installed on an organization or a specific repository.',
        _owner: {
          _profile: {
            lastName: 'John',
            firstName: 'Student'
          }
        },
        date: '2 mins ago'
      },
      {
        body: 'Less is a CSS pre-processor, meaning that it extends the CSS language, adding features that allow variables, mixins, functions and many other techniques. Vagrant enables users to create and configure lightweight, reproducible, and portable development environments.',
        _owner: {
          _profile: {
            lastName: 'Instructor',
            firstName: 'Juan'
          }
        },
        date: '3 mins ago'
      },
      {
        body: 'Each webhook can be installed on an organization or a specific repository.',
        _owner: {
          _profile: {
            lastName: 'John',
            firstName: 'Student'
          }
        },
        date: '2 mins ago'
      },
      {
        body: 'Less is a CSS pre-processor, meaning that it extends the CSS language, adding features that allow variables, mixins, functions and many other techniques. Vagrant enables users to create and configure lightweight, reproducible, and portable development environments.',
        _owner: {
          _profile: {
            lastName: 'Instructor',
            firstName: 'Juan'
          }
        },
        date: '3 mins ago'
      }
    ];
  }
}
