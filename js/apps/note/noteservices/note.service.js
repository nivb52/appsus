import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/storage.service.js'


// CRUD
export default {
    getEmptyTodo,
    query,
    add,
    getEmptyNote,
    queryTodos // temporary
    // toggle
}
const NOTES_KEY = 'notes'

const notesDB = [{
    id: 'rteesd22',
    txt: 'Puki called',
    isTxt: true,
    todos: getEmptyTodo(),
    isTodo: false,
    video: '<iframe width="853" height="480" src="https://www.youtube.com/embed/tcMMmXpw6d8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    isVideo: false,
    img: '',
    isImg: false,
    color: 'white',
    bgc: 'blue',
    isPinned: false
}, {
    id: '2232ssfw3',
    txt: '',
    isTxt: false,
    todos: getEmptyTodo(),
    isTodo: false,
    video: `<iframe width="853" height="480" src="https://www.youtube.com/embed/ynG6tkLO3SQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    isVideo: true,
    img: '../../../../img/1.jpg',
    isImg: true,
    color: 'white',
    bgc: 'black',
    isPinned: false
},
{
    id: '234r1ffgr3',
    txt: 'Eli called',
    isTxt: true,
    todos: getEmptyTodo(),
    isTodo: false,
    video: '',
    isVideo: false,
    img: '../../../../img/2.jpg',
    isImg: true,
    color: 'white',
    bgc: 'green',
    isPinned: false
},





]
var gTodos = [];
_createTodos();

function queryTodos() {
    return gTodos;
}

function query() {
    var notes = storageService.load(NOTES_KEY) || notesDB || _generatNotes()

    // if (!notes[0][cheackNewFeature]) _addNewFeatures(notes)

    storageService.store(NOTES_KEY, notes)
    return notes
}

function add(note) {
    note.id = utilService.makeId();
    gTodos.unshift(note)
}



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

