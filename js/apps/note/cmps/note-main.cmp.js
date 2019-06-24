import noteService from '../noteservices/note.service.js'
import noteText from './note-text.cmp.js'
import noteTodo from './note-todo.cmp.js'
import noteImg from './note-img.cmp.js'
import noteLink from './note-link.cmp.js'

export default {
    name: 'note-main',
    template: `
    <section class="note-container" :style="{backgroundColor: note.bgc}">
        <note-text :note="note" v-show="note.isTxt"></note-text>
        <note-todo :note="note" v-show="note.isTodo"></note-todo>
        <note-img :note="note" v-show="note.isImg"></note-img>
        <note-link :note="note" v-show="note.isVideo"></note-link>
    </section>
    `,
    components: {
        noteText,
        noteTodo,
        noteImg,
        noteLink,
    },
    props: ['note'],

    data() {
        return {
            // notes: noteService.query(),
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


}