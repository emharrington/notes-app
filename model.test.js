const NotesModel = require('./model');

describe('model', () => {
    const model = new NotesModel();

    it('returns an empty array', () => {
        expect(model.getNotes()).toEqual([]);
    });

    it('adds "Buy milk" & "Go to the gym" note', () => {
        model.addNote('Buy milk');
        model.addNote('Go to the gym');
        expect(model.getNotes()).toEqual(['Buy milk', 'Go to the gym']);
    });

    it('resets the notes array', () => {
        model.reset();
        expect(model.getNotes()).toEqual([]);
    });
})