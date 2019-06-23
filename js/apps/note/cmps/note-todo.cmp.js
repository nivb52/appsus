import noteService from '../../note/noteservices/note.service.js'


export default {
    name: 'noteTodo',
    template: `
    <section class="note-todo">
                <div>
                <textarea type="text" placeholder="What todo?" v-model="newNote.txt" @keyup.enter="addNote"> </textarea>
        </div>
        <ul class="numbered-todo-list">
            <li v-for="(note, i) in notes">
                    {{i+1}}. {{note.txt}} (Priority: {{note.priority}})
                    <button class="delete-todo-btn" @click.stop="deleteTodo(i)">x</button>
            </li>
        </ul>


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
    }
}