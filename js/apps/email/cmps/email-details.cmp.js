import { emailService } from '../emailservices/email.service.js'

export default {

    name: 'email-details',
    template: `
    <section>
        <h1> DETAILS EMAIL </h1>
        <pre>
            <!-- {{emailDetails}} -->
            
        </pre>
</section>

     `,

    created() {
        const emailId = this.$route.params.id
        console.log('email id ', emailId);
        // return emailService.queryId(emailId, 'emails')
    },
    methods: {
        // emailDetails() {
        // console.log();

        // return emailService.queryId(emailId, 'emails')
        // }
    },

}