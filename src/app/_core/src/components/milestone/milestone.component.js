import {
    Component,
    EventEmitter,
    Input,
    Output,
    OnInit,
    OnDestroy
} from '@angular/core';


import template from './milestone.template.html';
import style from './milestone.styles.scss';

@Component({
    selector: 'milestones',
    template,
    styles: [style],
    inputs: ['milestone'],
    outputs: ['onSelect']
})

export class Milestone {

    constructor() {
        // And instantiate the emitters
        this.onSelect = new EventEmitter();
    }

    ngOnInit() {
    }

    ngOnDestroy() {
    }

    click(event) {
        event.preventDefault();

        this.onSelect.emit(this.milestone.name);
    }

}
