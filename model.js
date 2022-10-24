class NotesModel {
    constructor() {
        this.note = [];
    }

    getNotes() {
        return this.note;
    }

    addNote(item) {
        this.note.push(item);
    }

    reset() {
        this.note = [];
    }
}

module.exports = NotesModel;