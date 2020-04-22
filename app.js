const chalk = require('chalk')
const notes = require('./notes.js')
const yargs = require('yargs')


yargs.version('1.1.0')

yargs.command({
    command:'add',
    describe:'Add a new Note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type:'string'

        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body)           
    }
})

yargs.command({
    command:'remove',
    describe:'Remove a new Note',
    builder: {
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
       
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command:'list',
    describe:'List your Notes',
    handler(){
        notes.listNotes()
        
    }
})

yargs.command({
    command:'read',
    describe:'Read a note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        
        notes.readNote(argv.title)
        
    }
})

yargs.parse()