import noteService from '../../note/noteservices/note.service.js'


export default {
    name: 'noteTodo',
    template: `
    <section class="note-todo">
        <span>todo </span>
        <h1>todo</h1>
        <div>
          <textarea type="text" placeholder="What todo?" v-model="newNote" @keyup.enter="addNote"> </textarea>
        </div>

        <ul class="numbered-todo-list">
            <li v-for="(todo, i) in todos">
            <!-- there is a problem we probably need to change note.todos to be an array   -->
                    {{i+1}}. {{todo.txt}} (Priority: {{todo.priority}})
                    <button class="delete-todo-btn" @click.stop="onDeleteTodo(note.id,i)">x</button>
            </li>
        </ul>


    </section>

    `,
    props: ['todos'],
    data() {
        return {
            // todo1: this.todos,
            // todo: this.note.todos,
            newNote: ''
        }
    },
    methods: {
        addTodo() {
            noteService.onAddTodo(this.newNote);
        },
        onDeleteTodo(noteIdx, todoIdx) {
            noteService.deleteTodo(noteIdx, todoIdx)
        },
    }
}