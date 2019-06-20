import { emailService } from '../apps/email/emailservices/email.service.js'
import emailList from '../apps/email/cmps/email-list.cmp.js'
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
         <h1> email App </h1>
         <main id="main">
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
            filterMinPrice: null,
            filterMaxPrice: null,
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
        // emailDetails,
        // emailFilter,
        // eventBus

    },
}