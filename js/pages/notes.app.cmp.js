import noteService from '../apps/note/noteservices/note.service.js'
import noteTodo from '../apps/note/cmps/note-todo.cmp.js'
import noteImg from '../apps/note/cmps/note-img.cmp.js'
import noteLink from '../apps/note/cmps/note-link.cmp.js'


export default {
    name: 'notesApp',
    template: `
    <section class="notes-app">
        <h1> Welcome to notes App!</h1> 

        <note-img></note-img>
        <note-todo></note-todo>
        <note-link></note-link>
    </section>

    `,
    data() {
        return {
            notes: noteService.query(),
            newNote: noteService.getEmptyNote()
        }
    },
    methods: {
        addNote() {
            noteService.add(this.newNote);
            this.newNote = noteService.getEmptyNote();
            console.log(this.notes);
        },
        deleteTodo(todoIdx) {
            // console.log('Ev', ev);
            this.notes.splice(todoIdx, 1)
        },
    },
    components: {
        noteTodo,
        noteImg,
        noteLink,
    }
}