

export default {
    name: 'email-select',
    template: `
    <div class="col col-1">
        <span class="dot"></span>
        <div class="checkbox-wrapper">
            <input type="checkbox" id="chk1">
            <label for="chk1" class="toggle"></label>
        </div>
        
        <p class="title">{{email.from}}</p>
        
        <span @onclick="onRead" :class=iconIsRead></span>
        <span @click="onTrash" class="glyphicon glyphicon-trash"></span>
        <span class="star-toggle glyphicon glyphicon-star-empty">
        </span>
    </div>
    
    
    `,
    props: ['email'],
    methods: {
        onTrash() {
            this.email.isTrash = true
            this.email.folder = 'trash'
        },
        onRead() {
            console.log('read click');

            this.email.isRead = !this.email.isRead
        }
    },
    computed: {
        iconIsRead() {
            // IF NOT READ : 
            if (!this.email.isRead) return "glyphicon glyphicon-eye-open"
            return "glyphicon glyphicon-eye-close" // or use : glyphicon-envelope
        }

    },
}