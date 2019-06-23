import { emailService } from '../apps/email/emailservices/email.service.js'
import emailList from '../apps/email/cmps/email-list.cmp.js'
import emailSidebar from '../apps/email/cmps/email-sidebar.cmp.js'
import emailFilter from '../apps/email/cmps/email-filter.cmp.js'
// import emailDetails from '../cmps/email-details.cmp.js';
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
            const emailLabel = this.$route.params.labels || false
            const emailFolder = this.$route.params.folder || 'inbox'

            // advance user search option: 
            if (emailFolder === 'read') this.filter = '@read'
            if (emailFolder === 'unread') this.filter = '@unread'

            if (emailLabel) {
                // look on label by url-params
                if (!this.filter && emailLabel) return this.emails.filter(email => {
                    return email.labels.includes(emailLabel)
                })
            }


            // look on folder  by url-params
            if (!this.filter && emailFolder) return this.emails.filter(email => {
                return email.folder === emailFolder
            })

            // simple show/no-show of read unread by search @read
            if (this.filter === '@read' || this.filter === '@unread') return this.emails.filter(email => { return email.isRead === false })

            //search (only 1 word at the)
            return this.emails.filter(email => {
                return email.subject.toLowerCase().includes(this.filter.toLowerCase()) && email.folder === emailFolder || email.from.toLowerCase().includes(this.filter.toLowerCase()) && email.folder === emailFolder
            })


        },
    },
    mounted() {
        console.log('email app is on');
    },
    created() {
        // const emailFolder = this.$route.params.folder
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