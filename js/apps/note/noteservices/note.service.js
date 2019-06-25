import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/storage.service.js'


// CRUD
export default {
    query,
    queryId,
    add,
    deleteTodo,
    addTodo,
    getEmptyNote,
    queryTodos, // temporary
    getEmptyTodo,
}
const NOTES_KEY = 'notes'
const notesDB =
    [{
        id: 'rtPew77',
        txt: 'I do not know what else to do here. maybe that is enought?',
        isTxt: false,
        todos: getEmptyTodo(),
        isTodo: false,
        video: '',
        isVideo: false,
        img: 'https://image.shutterstock.com/image-vector/young-troubled-couple-confused-woman-260nw-1176037441.jpg',
        isImg: true,
        color: 'black',
        bgc: 'lightseagreen',
        isPinned: true
    },
    {
        id: 'rteew66',
        txt: 'I do not know what else to do here. maybe that is enought?',
        isTxt: false,
        todos: getEmptyTodo(),
        isTodo: false,
        video: '',
        isVideo: false,
        img: '',
        isImg: false,
        color: 'black',
        bgc: 'lightyellow',
        isPinned: true
    },
    {
        id: 'rtUxew88',
        txt: '',
        isTxt: false,
        todos: getEmptyTodo(),
        isTodo: true,
        video: '',
        isVideo: false,
        img: 'https://i.pinimg.com/originals/b1/12/40/b1124022db5e9bbed45cd870f365c185.jpg',
        isImg: true,
        color: 'black',
        bgc: 'lightsalmon',
        isPinned: true
    },
    {
        id: 'rteew55',
        txt: 'What else can I do?',
        isTxt: true,
        todos: getEmptyTodo(),
        isTodo: true,
        video: '',
        isVideo: false,
        img: '',
        isImg: false,
        color: 'black',
        bgc: 'lightskyblue',
        isPinned: true
    },
    {
        id: 'rteew52',
        txt: 'long long time ago i can still remember how that music used to make me smile',
        isTxt: true,
        todos: getEmptyTodo(),
        isTodo: false,
        video: '',
        isVideo: false,
        img: '',
        isImg: false,
        color: 'black',
        bgc: 'lightskyblue',
        isPinned: true
    },
    {
        id: 'rteew44',
        txt: '',
        isTxt: false,
        todos: getEmptyTodo(),
        isTodo: false,
        video: 'https://www.youtube.com/watch?v=hLcSM4gbS3o',
        isVideo: true,
        img: '',
        isImg: false,
        color: 'black',
        bgc: 'lightcyan',
        isPinned: true
    },
    {
        id: 'rteew33',
        txt: 'Always look on the bright side of life',
        isTxt: true,
        todos: getEmptyTodo(),
        isTodo: true,
        video: '',
        isVideo: false,
        img: '',
        isImg: false,
        color: 'black',
        bgc: 'lightgreen',
        isPinned: true
    },
    {
        id: 'rteew22',
        txt: 'Met witn Shuki',
        isTxt: true,
        todos: getEmptyTodo(),
        isTodo: true,
        video: 'https://www.youtube.com/watch?v=buHrSbwHXbo',
        isVideo: false,
        img: '',
        isImg: false,
        color: 'black',
        bgc: 'lightcoral',
        isPinned: true
    }, {
        id: 'rtQks5d2',
        txt: 'Puki called',
        isTxt: true,
        todos: getEmptyTodo(),
        isTodo: false,
        video: 'https://www.youtube.com/embed/tcMMmXpw6d8',
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
        video: `https://www.youtube.com/embed/ynG6tkLO3SQ`,
        isVideo: true,
        img: '/img/1.jpg',
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
        img: '/img/codinglogo.jpg',
        isImg: true,
        color: 'white',
        bgc: 'green',
        isPinned: false
    },





    ]

function deleteTodo(noteIdx, todoIdx) {
    let notes = storageService.load(NOTES_KEY)
    let note = queryId(noteIdx)
    notes[note].todos.splice(todoIdx, 1)
}
function addTodo(noteIdx, todo) {
    let notes = storageService.load(NOTES_KEY)
    let note = queryId(noteIdx)
    notes[note].todos.unshift(todo.txt)
}

function queryId(idx, itemsName = 'notes') {
    const items = storageService.load(NOTES_KEY)
    const itemIdx = utilService.getItemById(idx, items)
    return items[itemIdx]
}


function queryTodos(id = 'rteesd22') {
    // const notes = storageService.load(NOTES_KEY) || notesDB

    return
}

query()
function query() {
    var notes = storageService.load(NOTES_KEY) || notesDB || _generatNotes()

    storageService.store(NOTES_KEY, notes)
    return notes
}

function add(note = noteService.getEmptyNote()) {
    note.id = utilService.makeId();
    let notes = storageService.load(NOTES_KEY) || notesDB
    notes.unshift() // unshift or reverse in th css ??
    notes[0].id = note.id
    storageService.store(NOTES_KEY, notes)
}

function getEmptyNote(txt = '', link = '', color = 'blue', bgc = 'white') {
    return {
        id: utilService.makeId(),
        txt,
        isTxt: false,
        todos: { txt, isDone: false, priority: 0 },
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




function getEmptyTodo(txt = '') {
    return { txt, isDone: false, priority: 0 }
}


function _createTodos() {
    let notes = storageService.load(NOTES_KEY) || notesDB
    notes.push(getEmptyNote)
    notes[notes.length - 1].todos = add(getEmptyTodo('Wash the dishes'))
    notes[notes.length - 1].todos = add(getEmptyTodo('Learn Vue JS'))
}