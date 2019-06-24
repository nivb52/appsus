import noteService from '../apps/note/noteservices/note.service.js'
import noteText from '../apps/note/cmps/note-text.cmp.js'
import noteTodo from '../apps/note/cmps/note-todo.cmp.js'
import noteImg from '../apps/note/cmps/note-img.cmp.js'
import noteLink from '../apps/note/cmps/note-link.cmp.js'


export default {
    name: 'notesApp',
    template: `
    <section class="notes-app">
        <h1> Welcome to notes App!</h1> 
        <note-text></note-text>
        <note-todo></note-todo>
        <note-img></note-img>
        <!-- <note-link></note-link> -->
    </section>

    `,
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
        noteText,
        noteTodo,
        noteImg,
        noteLink,
    }
}