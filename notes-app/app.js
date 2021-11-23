const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// customize yargs version
yargs.version('1.1.0')

//  add, remove, read, list

// Create add command

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body)
    
  }
})

// crate remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
      title: {
        describe: 'Note title',
        demandOption: true,
        type: 'string'
      }
  },
  handler: (argv) => {
    notes.removeNote(argv.title)
  }
})

// crate list command
yargs.command({
  command: 'list',
  describe: 'List your notes',
  handler: () => {
    notes.listNotes()
  }
})

// crate read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
    },
  handler(argv) {
      notes.readNote(argv.title)
  }
})
 yargs.parse()