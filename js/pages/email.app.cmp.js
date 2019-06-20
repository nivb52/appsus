import { emailService } from '../apps/email/emailservices/email.service.js'
import emailList from '../apps/email/cmps/email-list.cmp.js'
import emailSidebar from '../apps/email/cmps/email-sidebar.cmp.js'
import emailFilter from '../apps/email/cmps/email-filter.cmp.js'
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
             
            <email-filter @set-filter="setFilter"></email-filter>

            <h1 class="page-title"><a class="sidebar-toggle-btn trigger-toggle-sidebar"><span class="line"></span><span
            class="line"></span><span class="line"></span><span class="line line-angle1"></span><span
            class="line line-angle2"></span></a>Inbox<a><span class="icon glyphicon glyphicon-chevron-down"></span></a>
            </h1>

    </header>


        <email-list :emails="emailsToShow" ></email-list>

<!-- v-if="isSelected" @selected-email="showAndGetDetails"  -->

         <email-details v-if="!isSelected" :email="selectedemail"></email-details>



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

            // if (!this.filter) return this.emails.filter(email => {
            //     return email.folder === //HERE WE WILL USE PARAMS
            // })

            if (!this.filter) return this.emails.filter(email => {
                return email.isTrash === false
            })

            return this.emails.filter(email => {
                return email.subject.toLowerCase().includes(this.filter.toLowerCase()) || email.from.toLowerCase().includes(this.filter.toLowerCase())
            })


        },
    },
    mounted() {
        console.log('email app is on');

    },

    methods: {
        setFilter(filter) {
            this.filter = filter.string
        },

        showAndGetDetails(email) {
            this.isSelected = false
            this.selectedemail = email
        },
    },

    components: {
        emailList,
        emailSidebar,
        emailFilter,
        // emailDetails,
        // eventBus

    },
}