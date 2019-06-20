import { bookService } from '../services/book.service.js'
import bookList from '../cmps/book-list.cmp.js'
import bookPreview from '../cmps/book-preview.cmp.js';
import bookDetails from '../cmps/book-details.cmp.js';
import bookFilter from '../cmps/book-filter.cmp.js';
import eventBus from '../cmps/book-bus.cmp.js';

var books = bookService.query()

/*works: 
*/
export default {
    template: `
    <section>
    <h1> Book App </h1>
    
    <book-filter @filtered="onFilter" >    </book-filter> 
    <book-list v-if="isSelected" @selected-book="showAndGetDetails" :books = booksToShow ></book-list>

    <book-details v-if="!isSelected" :book="selectedBook"></book-details>

    </section>
    `,
    data() {
        return {
            books: books,
            filter: null,
            filterMinPrice: null,
            filterMaxPrice: null,
            bookIdx: null,
            isSelected: true,
            selectedBook: null
        }
    },
    computed: {
        booksToShow() {

            /*TODO :add filter with price also in this function or other and this will be the manager function*/

            if (!this.filter) return this.books
            return this.books.filter(book => {
                return book.title.includes(this.filter)
            })


        },
    },

    methods: {
        onFilter(theFilter) {
            this.filter = theFilter
        },

        showAndGetDetails(book) {
            this.isSelected = false
            this.selectedBook = book
        },
    },

    components: {
        bookList,
        bookDetails,
        bookPreview,
        bookFilter,
        eventBus

    },
}