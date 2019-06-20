import { emailService } from '../apps/email/emailservices/email.service.js'
import emailList from '../apps/email/cmps/email-list.cmp.js'
import emailSidebar from '../apps/email/cmps/email-sidebar.cmp.js'
// import emailDetails from '../cmps/email-details.cmp.js';
// import emailFilter from '../cmps/email-filter.cmp.js';
// import eventBus from '../cmps/email-bus.cmp.js';

var emails = emailService.query()

/*works: 
*/
export default {
    name: 'email-app',
    template: `
    <section>
        
        <email-sidebar></email-sidebar>
        <main id="main">
        <div class="overlay"></div>
        <header class="header">
             <div class="search-box">
                 <input placeholder="Search..."><span class="icon glyphicon glyphicon-search"></span>
            </div>
            <h1 class="page-title"><a class="sidebar-toggle-btn trigger-toggle-sidebar"><span class="line"></span><span
            class="line"></span><span class="line"></span><span class="line line-angle1"></span><span
            class="line line-angle2"></span></a>Inbox<a><span class="icon glyphicon glyphicon-chevron-down"></span></a>
            </h1>
    </header>
         <!-- <div class="overlay"></div> -->
<!--     
    <email-filter @filtered="onFilter" >    </email-filter> 
    <email-list v-if="isSelected" @selected-email="showAndGetDetails" :emails = emailsToShow ></email-list>
<
    <email-details v-if="!isSelected" :email="selectedemail"></email-details> -->
    <email-list :emails="emails"></email-list>
    </main>
    </section>
    `,
    data() {
        return {
            emails: emails,
            filter: null,
            emailIdx: null,
            isSelected: true,
            selectedEmail: null
        }
    },
    computed: {
        emailsToShow() {

            /*TODO :add filter with price also in this function or other and this will be the manager function*/

            if (!this.filter) return this.emails
            return this.emails.filter(email => {
                return email.title.includes(this.filter)
            })


        },
    },
    mounted() {
        console.log('email app is on');

    },

    methods: {
        onFilter(theFilter) {
            this.filter = theFilter
        },

        showAndGetDetails(email) {
            this.isSelected = false
            this.selectedemail = email
        },
    },

    components: {
        emailList,
        emailSidebar
        // emailDetails,
        // emailFilter,
        // eventBus

    },
}