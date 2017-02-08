import { Component } from '@angular/core';

@Component({
  selector: 'adjacent-button-input',
  template: `
    <div class="input-group">
      <span class="input-group-btn" *ngIf="reverse">
        <button class="btn btn-primary" type="button">{{label.button.text}}</button>
      </span>
      <input type="text" class="form-control" placeholder="{{label.input.placeholder}}">
      <span class="input-group-btn" *ngIf="!reverse">
        <button class="btn btn-primary" type="button">{{label.button.text}}</button>
      </span>
    </div>
    `,
  inputs: ['reverse', 'label']
})
export class AdjacentButtonInput {}