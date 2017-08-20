const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const titleOptions = {
        describe: 'Title of note',
        demand: true,
        alias: 't'
    };

const bodyOptions = {
    describe: 'Body of the note', 
    demand: true,
    alias: 'b'

};
const argv = yargs
.command('add', 'Add a new note', {
    title: titleOptions,
    body: bodyOptions
})
.command('list', 'List all notes')
.command('read', 'Read a note', {
    title: titleOptions,
    
})
.command('remove', 'Remove a note', {
     title: titleOptions
})

.help()
.argv;
var command = argv._[0];

switch (command) {
    case "add":
    var note = notes.addNote(argv.title, argv.body)
        if(note === undefined){
            console.log(`Sorry, this note has already been saved before!!!`)
        }else{
            console.log('Note Created succesfully')
            notes.logNote(note);
            
        }
        break

    case "remove":
        var noteRemoved = notes.removeNote(argv.title, argv.body);
        var message = noteRemoved ? 'Note Was Removed' : 'Note not found';
        console.log(message)
        break

    case "read":
        var note = notes.getNote(argv.title);
        console.log(`app.js note ${note}`)
        if(note){
            console.log('Note Found')
            notes.logNote(note);
                }else{
            
            console.log(`Note not found, sorry`)
        }
        break

    case "list":
    var allNotes = notes.getAll() ;
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach((note)=> notes.logNote(note));
    
    break
  
    

}