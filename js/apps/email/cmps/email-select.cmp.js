import { emailService } from '../emailservices/email.service.js'

export default {
    name: 'email-select',
    template: `
    <div class="col col-1">
        <div class="checkbox-wrapper">
            <input type="checkbox" id="chk1">
            <label for="chk1" class="toggle"></label>
        </div>
        <span class="dot"></span>
        
        
        <span @click="onRead" :class=iconIsRead></span>
        <span @click="onTrash" class="glyphicon glyphicon-trash"></span>
        <span class="star-toggle glyphicon glyphicon-star-empty">
            </span>
            <span class="title">{{email.from}}</span>
    </div>
    
    
    `,
    props: ['email'],
    methods: {
        onTrash() {
            emailService.updateKey('trash', this.email.id)
            this.email.isTrash = true
            this.email.folder = 'trash'
        },
        onRead() {
            emailService.updateKey('read', this.email.id)
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