import { emailService } from '../apps/email/emailservices/email.service.js'
import emailList from '../apps/email/cmps/email-list.cmp.js'
import emailSidebar from '../apps/email/cmps/email-sidebar.cmp.js'
import emailFilter from '../apps/email/cmps/email-filter.cmp.js'
import emailCompose from '../apps/email/cmps/email-compose.cmp.js';
import eventBusEmails from '../apps/email/cmps/eventBusEmails.cmp.js'

var emails = emailService.query()

export default {
    name: 'email-app',
    template: `
<section>
        
        <email-sidebar></email-sidebar>

        <main id="main" >
        <div class="overlay"></div>
     <header class="header">
         
         <button class="close-sidebar" v-show="openedSidebar"  @click="closeOnMobile"> × </button>
         <email-filter @set-filter="setFilter"></email-filter>
         <email-compose></email-compose>  

         <h1 class="page-title">
             <a @click="openSidebar" class="sidebar-toggle-btn trigger-toggle-sidebar">
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
                <span class="line line-angle1"></span>
                <span class="line line-angle2"></span>
            </a>
         
         <span class="mobile-hide">Inbox</span>
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
            selectedEmail: null,
            openedSidebar: false
        }
    },
    computed: {

        emailsToShow() {
            const emailLabel = this.$route.params.labels || false
            const emailFolder = this.$route.params.folder || 'inbox'

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


            // advance user search option: 
            if (emailFolder === 'read') this.filter = '@read'
            if (emailFolder === 'unread') this.filter = '@unread'

            // simple show/no-show of read unread by search @read
            if (this.filter === '@read') return this.emails.filter(email => { return email.isRead === false })
            if (this.filter === '@unread') return this.emails.filter(email => { return email.isRead === true })

            // ###########################
            //SEARCH IN LABELS OR FOLDERS : 
            const currPath = emailLabel || emailFolder
            const currKey = emailLabel ? 'labels' : 'folder'

            const searchParshe = this.filter.trim().toLowerCase().split(' ')

            //search (for more than 1 word )
            var filteredEmails = this.emails
            for (var i = 0; i < searchParshe.length; i++) {
                filteredEmails = this.search(searchParshe[i], filteredEmails, currKey, currPath)
            }
            return filteredEmails

        },
    },
    mounted() {
        console.log('email app is on');
        const sidebar = document.querySelector('#sidebar')

    },
    created() {
        eventBusEmails.$on('emailSent', () => {
            this.emails = emailService.query()
        })
    },
    methods: {
        setFilter(filter) {
            this.filter = filter.string
        },

        showAndGetDetails(email) {
            this.isSelected = false
            this.selectedemail = email
        },

        search(searchParshe, emails, currKey, currPath) {
            return emails.filter(email => {
                return email.subject.toLowerCase().includes(searchParshe) ||
                    email.body.toLowerCase().includes(searchParshe) ||
                    email.from.toLowerCase().includes(searchParshe) &&
                    // SEARCH IN LABELS AND FOLDERS :
                    (email[currKey] === currPath || email[currKey].includes(currPath))
            })
        },
        openSidebar() {
            sidebar.style.transform = "translateX(0)";
            this.openedSidebar = true
        },
        closeOnMobile() {
            if (this.openedSidebar) {
                this.openedSidebar = false
                sidebar.style.transform = "translateX(-100%)";
            }
        },
    },

    components: {
        emailList,
        emailSidebar,
        emailFilter,
        emailCompose,
        eventBusEmails

    },
}


