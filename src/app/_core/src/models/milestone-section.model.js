
export class MilestoneModel {

     constructor(name, text) {
        this._name = name || '';
        this._text = text || this._name; // Either passed as a param or same as name

        this._active = false;   // Inactive by default
        this._checked = false;  // Unchecked by default
        this._locked = true;    // Locked by default
    }

    // Getters and Setters
    get name() { return this._name; }
    set name(value) { this._name = value; }

    get text() { return this._text; }
    set text(value) { this._text = value; }

    get isActive() { return this._active; }       // clickable dark grey text
    get isInactive() { return !this._active; }     // clickable light grey text
    get isChecked() { return this._checked; }     // green check mark next to it
    get isLocked() { return this._locked; }       // lock icon next to it


    active() {
        this._active = true;
        // Fluent
        return this;
    }
    inactive() {
        this._active = false;
        // Fluent
        return this;
    }
    checked() {
        this._checked = true;
        // Fluent
        return this;
    }
    unchecked() {
        this._checked = false;
        // Fluent
        return this;
    }
    locked() {
        this._locked = true;
        // Fluent
        return this;
    }
    unlocked() {
        this._locked = false;
        // Fluent
        return this;
    }


    default() {
        // Sets the 3 default values
        this._active = false;
        this._checked = false;
        this._locked = true;
    }

    done() {
        // Sets the inactve, checked, locked flags
        this._active = false;
        this._checked = true;
        this._locked = false;
    }


}
