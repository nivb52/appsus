import { emailService } from '../emailservices/email.service.js'

export default {

    name: 'email-details',
    template: `
    <section>
        <h1> DETAILS EMAIL </h1>
        <pre>
            {{emailDetails}}
            
        </pre>
</section>

     `,
    data() {
        return {
            emailDetails: 'There was a problem, please try again later'
        }
    },

    created() {
        const emailId = this.$route.params.id
        this.getEmailDetails(emailId)

    },
    methods: {
        getEmailDetails(emailId) {
            const email = emailService.queryId(emailId)
            this.emailDetails = email
        },
    },

}