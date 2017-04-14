import { Component } from '@angular/core';

import template from './create.template.html';
import style from './create.style.scss';

@Component({
  selector: 'article-create',
  template,
  styles: [style]
  })
  
  export class ArticleCreate {
    constructor(){}
    
    ngOnInit(){}
  
    milestoneSelected($event) {
      switch ($event) {
        case 'APIDefinition':
          this.router.navigate(['/', 'swagger-editor', this.createdApi.id, this.createdApi.latestVersion.version]);
          break;
        case 'SubmitForReview':
          this.router.navigate(['/', 'swagger-editor', this.createdApi.id, this.createdApi.latestVersion.version, 'review']);
          break;
      }
    }
  }
