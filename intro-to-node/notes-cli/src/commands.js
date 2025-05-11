import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import { findNotes, getAllNotes, newNote } from './notes.js';
import { listNotes } from './utils.js';
//new note
//get all the notes
//find notes
//remove

//clear all notes
//open in wen browser


yargs(hideBin(process.argv))
  .command('new <note>', 'create a new note', (yargs) => {
    return yargs.positional('note',{
        describe:'The content of the new note tha you want to create',
        type:'string'
    })
  }, async (argv) => {
    // console.info(argv)
    const tags  = argv.tags ? argv.tags.split(',') : [];

    const note = await newNote(argv.note, tags);

    console.log('Note added!', note.id);
  })
  .option('tags',{
    alias: 't',
    type:'string',
    description:'tags to add to the note'
  })
  .command('all', 'fetch all notes', () => {}, async (argv) => {
    const notes  = await getAllNotes();
    listNotes(notes);
  })
  .command('find <filter>', 'fetch the matching notes', (yargs) => {
    return yargs.positional('note',{
        describe:'The search term to filter notes and will eb applied to note.content',
        type:'string'
    })
  }, async (argv) => {

    const notes  = await findNotes(argv.filter);
    listNotes(notes)
  })
  .command('remove <id>', 'remove a note by id', (yargs) => {
    return yargs.positional('id',{
        describe:'The id of the note u want to remove',
        type:'number'
    })
  }, (argv) => {
    console.info(argv)
  })
  .command('web [port]', 'lauch website to see notes', (yargs) => {
    return yargs.positional('port',{
        describe:'port to bind on',
        default:5000,
        type:'number'
    })
  }, (argv) => {
    console.info(argv)
  })
  .command('clean', 'remove all notes', () => {}, (argv) => {
    console.info(argv)
  })
  .demandCommand(1)
  .parse()