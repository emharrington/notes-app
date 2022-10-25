/**
 * @jest-environment jsdom
 */

 const fs = require('fs');

 const NotesModel = require('./model');
 const NotesView = require('./view'); 

describe('Notes view', () => {
    it('displays 2 notes', () => {
        document.body.innerHTML = fs.readFileSync('./index.html');

        const model = new NotesModel;
        const view = new NotesView(model);

        model.addNote('first note');
        model.addNote('another note');

        view.displayNotes();

        expect(document.querySelectorAll('div.note').length).toEqual(2);
    });
});