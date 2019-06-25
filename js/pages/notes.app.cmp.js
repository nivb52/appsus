import noteService from '../apps/note/noteservices/note.service.js'
import noteMain from '../apps/note/cmps/note-main.cmp.js'
import noteTodo from '../apps/note/cmps/note-todo.cmp.js'
import noteImg from '../apps/note/cmps/note-img.cmp.js'
import noteLink from '../apps/note/cmps/note-link.cmp.js'
import noteText from '../apps/note/cmps/note-text.cmp.js'


export default {
    name: 'notesApp',
    template: `
    <section class="notes-app">
        <h1> Welcome to notes App!</h1> 
        <h2> if you won't write it you will forget it</h2>
<div id="main" class="overlay"></div>
<div id="main" class="overlay"></div>
<button @click="addNote"> add new note </button>

<div id="main" class="overlay"></div>
<div id="main" class="overlay"></div>
<div id="main" class="overlay"></div>
<div id="main" class="overlay"></div>
<div id="main" class="overlay"></div>
<div id="main" class="overlay"></div>
<div id="main" class="overlay"></div>
<div id="main" class="overlay"></div>
<div id="main" class="overlay"></div>
        <!-- <div class="note-container">
            <note-text ></note-text>
            <note-todo ></note-todo>
            <note-img ></note-img>
            <note-link ></note-link>
       </div> -->

        <div class="notes-container">
             <note-main v-for="note in notes"  :key="note.id" :note="note" ></note-main>
        
        </div>
       
    </section>

    `,
    data() {
        return {
            notes: noteService.query(),
            // newNote: 
        }
    },
    methods: {
        addNote() {
            console.log(this.notes);
            noteService.add();
            this.newNote = noteService.getEmptyTodo();
        },
        deleteNote(noteIdx) {
            // console.log('Ev', ev);
            // this.notes.splice(todoIdx, 1)
        },
    },
    components: {
        noteMain,
        noteImg,
        noteTodo,
        noteLink,
        noteText,
        noteService

    }
}