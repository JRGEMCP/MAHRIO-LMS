import {
    Component,
    EventEmitter,
    Input,
    Output
} from '@angular/core';
import { MilestoneService } from '../../services/milestone.service';

import template from './milestone-panel.template.html';
import style from './milestone-panel.styles.scss';

@Component({
    selector: 'milestone-panel',
    template,
    styles: [style],
    outputs: ['onMilestoneSelected', 'onSectionToggled']
})

export class MilestonePanel {
    static get parameters () {
        return [MilestoneService];
    }

    constructor(MilestoneService) {
        this.milestoneService = MilestoneService;

        // Instantiate the event emitter
        this.onMilestoneSelected = new EventEmitter();
        this.onSectionToggled = new EventEmitter();
    }

    get sections() { return this.milestoneService.sections; }

    selectMilestone($event) {
        // Trigger the selected event passing the name of the milestone
        this.onMilestoneSelected.emit($event);
    }

    sectionToggled($event) {
        // Trigger the  toggle event passing the name of the section
        this.onSectionToggled.emit($event);
    }
}
