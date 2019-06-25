import noteService from '../../note/noteservices/note.service.js'


export default {
    name: 'noteText',
    template: `
    <section class="note-text">
        <!-- <div> -->
            <textarea type="text" placeholder="Note something" v-model="noteTxt" @keyup.enter="addTxtNote"> </textarea>
      <!-- </div> -->
    </section>

    `,
    props: ['note'],
    data() {
        return {
            noteTxt: this.note ? this.note.txt : ' ',
        }
    },
    methods: {
        addTxtNote() {
            // var newNote = noteService.getEmptyNote(this.noteTxt)
            console.log(newNote, 'newNote');

            // noteService.addTxt(this.newNote);
            // this.newNote = noteService.getEmptyTxtNote();
            // console.log(this.notes);
        },
        // deleteText(noteIdx) {
        // console.log('Ev', ev);
        // this.notes.splice(noteIdx, 1)
    },
}