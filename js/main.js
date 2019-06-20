import bookHeader from './cmps/header.app.cmp.js'
import routes from './routes.js';

const router = new VueRouter({ routes })

var app = new Vue({
    el: '#app',
    template: `
    <div>
       <book-header></book-header>
       <!-- <router-view></router-view> -->
       <!-- <footer>Tshompyrights 2019</footer> -->
    </div>
    `,
    mounted() {
        console.log('Vue is almost happy !');
    },
    router,

    components: {
        // bookHeader,

    },
    // router: myRouter
})