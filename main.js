import bookHeader from './cmps/header.app.cmp.js'


// THE BELOW IS SHOW YOU THE INFORMATIVE WAY
// import theRoutes from './routes.js'
// const myRouter = new VueRouter({ routes: theRoutes })
import routes from './routes.js';
// short for `routes: routes`
const router = new VueRouter({ routes })

var app = new Vue({
    el: '#app',
    template: `
    <div>
       <book-header></book-header>
       <router-view></router-view>
    </div>
    `,
    mounted() {
        console.log('Vue is almost happy !');
    },
    router,

    components: {
        bookHeader,

    },
    // router: myRouter
})
//.$mount('#app')



