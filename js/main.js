'use strict'

import theRoutes from './routes.js'
import appHeader from './app.header.cmp.js'

const myRouter = new VueRouter({ routes: theRoutes })

var app = new Vue({
    el: '#app',
    created() {
        console.log('App has been Created!');
    },
    template: `
    <div>
           <app-header class="app-header"></app-header>
           <router-view></router-view>
           <!-- <footer class="app-footer">Niv & Tamir rights reserved 2019</footer> -->
       </div>
   


    `,
    components: {
        appHeader
    },
    router: myRouter
})