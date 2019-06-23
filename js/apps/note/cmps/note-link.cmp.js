// import { utilService } from '../../../services/util.service.js'


export default {
    name: 'note-link',
    template: `
    <section class="note-link">
        <h1> Welcome to note link</h1>    
        <input type="text" placeholder="Search for video" v-model="searchUrl"  @keyup.enter="searchVid" />
        {{searchUrl}}
        <iframe width="210" height="170" src="https://www.youtube.com/embed/tgbNymZ7vqY">
        </iframe>
    </section>
    `,
    data() {
        return {
            searchUrl: null
        }
    },
    methods: {
        searchVid() {

        }
        // searchVid(){
        //     todoService.add(this.newTodo);
        //     this.newTodo = todoService.getEmptyTodo();
        //     console.log(this.todos);
        // },
    },
    components: {
        // validUrl,
    },
}

function fixUrl(urlStr) {

}

https: //www.youtube.com/watch?v=2BD7pi77S8w&list=RDzXbcP3-wQhQ&index=3
    https: //www.youtube.com/watch?v=ISXpSThGHA8
    https: //www.youtube.com/watch?v=qRKjWL5a2-E&list=RDzXbcP3-wQhQ&index=4