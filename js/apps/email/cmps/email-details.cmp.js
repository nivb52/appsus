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

        //TODO: get email details:
        // let output = emailService.queryId(emailId, 'emails')
        // console.log('works ', output);
    },

}