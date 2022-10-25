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

    it('clears the list of previous notes before displaying', () => {
        document.body.innerHTML = fs.readFileSync('./index.html');

        const model = new NotesModel();
        const view = new NotesView(model);
        model.addNote('one');
        model.addNote('two');

        view.displayNotes();
        view.displayNotes();

        expect(document.querySelectorAll('div.note').length).toEqual(2);
    });

    it('adds a new note', () => {
        document.body.innerHTML = fs.readFileSync('./index.html');

        const model = new NotesModel();
        const view = new NotesView(model);

        const input = document.querySelector('#add-note-input');
        input.value = 'My new amazing test note';

        const button = document.querySelector('#add-note-btn');
        button.click();
        
        expect(document.querySelectorAll('div.note').length).toEqual(1);
        expect(document.querySelectorAll('div.note')[0].textContent).toEqual('My new amazing test note');
    });
});