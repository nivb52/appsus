// import { utilService } from '../../../services/util.service.js'


export default {
    name: 'note-link',
    template: `
    <section class="note-link">
        <span> note link</span>    
        <input type="text" placeholder="Search for video" v-model="searchUrl"  @keyup.enter="searchVid" />
        <iframe width="210" height="170" :src="note.isVideo" frameborder="0" allow="accelerometer;  picture-in-picture" allowfullscreen></iframe>
        <!-- autoplay; encrypted-media; gyroscope; -->
        
        </iframe>
    </section>
    `,
    props: ['note'],
    data() {
        return {
            searchUrl: null
        }
    },
    methods: {
        searchVid() {

        },

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