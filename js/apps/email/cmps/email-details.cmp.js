
export default {

    name: 'email-details',
    template: `
<h1> DETAILS EMAIL </h1>
`,

    created() {
        const emailId = this.$route.params.id
        console.log('email id ', emailId);

    },
    // props: ['email']
}