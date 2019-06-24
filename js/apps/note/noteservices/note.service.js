import { utilService } from '../../../services/util.service.js'

// CRUD
export default {
    getEmptyTodo,
    query,
    add,
    getEmptyNote,
    // toggle
}

var gTodos = [];
_createTodos();

function query() {
    return gTodos;
}

function add(note) {
    note.id = utilService.makeId();
    gTodos.unshift(note)
}

// function toggle(todo) {
//     todo.isDone = !todo.isDone;
// }


function _createTodos() {
    add(getEmptyTodo('Wash the dishes'))
    add(getEmptyTodo('Say hello'))
}

function getEmptyTodo(txt = '') {
    return { txt, isDone: false, priority: 0 }
}

function getEmptyNote(txt = '', link = '', color = 'blue', bgc = 'white') {
    return {
        id: utilService.makeId(),
        txt,
        isTxt: false,
        todos: getEmptyTodo(txt),
        isTodo: false,
        video: link,
        isVideo: false,
        img: File,
        isImg: false,
        color,
        bgc,
        isPinned: false
    }
}

// let notes_DB = [{
//     id: 'rteesd22',
//     txt,
//     isTxt: false,
//     todos: getEmptyTodo(txt),
//     isTodo: false,
//     video: link,
//     isVideo: false,
//     img: File,
//     isImg: false,
//     color,
//     bgc,
//     isPinned: false
// }]