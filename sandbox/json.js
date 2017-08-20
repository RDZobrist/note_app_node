const fs = require('fs');

var origninalNote = {
    title: 'Some Title',
    body: 'Some body'
};

var originalNoteString = JSON.stringify(origninalNote);
fs.writeFileSync('./sandbox/notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);



console.log(typeof note);
console.log(note.title);