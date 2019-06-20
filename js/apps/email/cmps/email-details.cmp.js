
export default {

    name: 'email-details',
    template: `
    <section>
        <h1> DETAILS EMAIL </h1>
        <pre>
            {{email}}
            
        </pre>
</section>

     `,

    created() {
        const emailId = this.$route.params.id
        console.log('email id ', emailId);

    },
    props: ['email'],

}