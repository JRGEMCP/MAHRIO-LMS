import { Injectable } from '@angular/core';
import { SectionModel } from '../models/milestone-section.model';

@Injectable()
export class MilestoneService {

    constructor() {
        // New sections array
        this._sections = [];

        // State of the milestones now kept in here
        this.addSection('Planning').activate().expand()
            .add('Monetization', 'Monetization');

        this.section('Planning').milestone('Monetization').active().unchecked().unlocked();

        this.addSection('Development').deactivate().contract()
            .add('SEO', 'SEO'),
            .add('Content', 'Content');
            .add('Linking', 'Linking');
            
        this.addSection('Deployment').deactivate().expand()
            .add('SocialMedia', 'Social Media')
            .add('Email', 'Email');
    }

    get sections() { return this._sections; }

    addSection(name, text) {
        this._sections.push(new SectionModel(name, text));
        return this.section(name); // Not fluent, but allows to set the section state and add milestones right away
    }

    section(name) {
        // Returns a SectionModel
        return this.sections.filter(s => s.name === name)[0];
    }
}
