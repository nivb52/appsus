import noteService from '../apps/note/noteservices/note.service.js'
import noteMain from '../apps/note/cmps/note-main.cmp.js'
// import noteTodo from '../apps/note/cmps/note-todo.cmp.js'
// import noteImg from '../apps/note/cmps/note-img.cmp.js'
// import noteLink from '../apps/note/cmps/note-link.cmp.js'


export default {
    name: 'notesApp',
    template: `
    <section class="notes-app">
        <h1> Welcome to notes App!</h1> 
        <h2> if you won't write it you will forget it</h2>

        <div class="notes-container">
             <note-main v-for="note in notes"  :key="note.id" :note="note" ></note-main>
        
        </div>
       
    </section>

    `,
    // props: ['notes'],
    data() {
        return {
            notes: noteService.query(),
            newNote: noteService.getEmptyTodo()
        }
    },
    methods: {
        addNote() {
            noteService.add(this.newNote);
            this.newNote = noteService.getEmptyTodo();
            console.log(this.notes);
        },
        deleteTodo(todoIdx) {
            // console.log('Ev', ev);
            this.notes.splice(todoIdx, 1)
        },
    },
    components: {
        noteMain,
    }
}