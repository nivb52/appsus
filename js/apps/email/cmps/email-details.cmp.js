import { emailService } from '../emailservices/email.service.js'

export default {

    name: 'email-details',
    template: `
    <section class="email-details">
       <h1> {{emailDetails.subject}} </h1>
        <h2>
            {{emailDetails.from}}
      </h2>
        <h3>
            {{emailDetails.sentAt}}
       </h3>
        <p>
            {{emailDetails.body}}
       </p>
           
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