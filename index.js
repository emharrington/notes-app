console.log('The notes app is running');

const NotesModel = require('./model');
const NotesView = require('./view');

const model = new NotesModel();
console.log(model.addNote('This is an example note'));

const view = new NotesView(model);
view.displayNotes();