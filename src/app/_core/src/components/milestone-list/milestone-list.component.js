import {
    Component,
    EventEmitter,
    Input,
    Output
} from '@angular/core';

import template from './milestone-list.template.html';
import style from './milestone-list.styles.scss';

@Component({
    selector: 'milestone-list',
    template,
    styles: [style],
    inputs: ['section'],
    outputs: ['onToggled']
})

export class MilestoneList {

    constructor() {
        // Instantiate the event emitter
        this.onToggled = new EventEmitter();
    }


    toggle() {
        // Toggle
        this.section.toggle();
        // Trigger the  toggle event passing the name of the section
        this.onToggled.emit(this.section.name);
    }
}
