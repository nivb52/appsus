import { utilService } from '../../../services/util.service.js'

// CRUD
export default {
    getEmptyNote,
    query,
    add,
    // toggle
}

var gNotes = [];
_createNotes();

function query() {
    return gNotes;
}

function add(note) {
    note.id = utilService.makeId();
    gNotes.unshift(note)
}

// function toggle(todo) {
//     todo.isDone = !todo.isDone;
// }


function _createNotes() {
    add(getEmptyNote('Wash the dishes'))
    add(getEmptyNote('Say hello'))
}

function getEmptyNote(txt = '') {
    return { txt, isDone: false, priority: 0 }
}