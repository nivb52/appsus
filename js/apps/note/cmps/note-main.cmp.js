import noteService from '../noteservices/note.service.js'
import noteText from './note-text.cmp.js'
import noteTodo from './note-todo.cmp.js'
import noteImg from './note-img.cmp.js'
import noteLink from './note-link.cmp.js'

export default {
    name: 'note-main',
    template: `
    <section class="note-container" :note="note" :style="{backgroundColor: note.bgc }">
        <note-text :note="note" :key="note.id" v-if="note.isTxt"></note-text>
        <!-- <note-todo :note="note.todos"  v-if="note.isTodo"></note-todo> -->
        <note-img :note="note"  v-if="note.isImg"></note-img>
        <!-- <note-link :note="note"  v-if="note.isVideo"></note-link> -->
    </section>
    `,

    props: ['note'],

    data() {
        return {
            // notes: noteService.query(),
            // newNote: noteService.getEmptyTodo(),
            // defaultBgc: 'white'
        }
    },
    methods: {
        addNote() {
            // noteService.add(this.newNote);
            // this.newNote = noteService.getEmptyTodo();
            // console.log(this.notes);
        },
        deleteTodo(todoIdx) {
            // // console.log('Ev', ev);
            // this.notes.splice(todoIdx, 1)
        },
    },
    components: {
        noteText,
        noteTodo,
        noteImg,
        noteLink,
    },


}