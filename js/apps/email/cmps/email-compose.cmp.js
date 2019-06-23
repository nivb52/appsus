



export default {
    name: 'email-compose',
    template: `
    <section>
        <input type="text" v-model="to"/>
        <input type="text" v-model="subject"/>
        <input type="text" v-model="body"/>
</section>
    `,
    data() {
        return {
            to: '',
            subject: '',
            body: ''
        }
    },
}