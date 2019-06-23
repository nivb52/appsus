import { emailService } from '../emailservices/email.service.js'

export default {
    name: 'email-select',
    template: `
    <div>
        <input type="checkbox" id="chk1">
        <label for="chk1" class="toggle"></label>
        
        <span @click="onRead" :class=iconIsRead></span>
        <span @click="onTrash" class="glyphicon glyphicon-trash"></span>
        <span @click="onStar" class="star-toggle glyphicon glyphicon-star-empty">
            </span>
            <span class="title">{{email.from}}</span>
    </div>
    
    
    `,
    props: ['email'],
    methods: {
        onTrash() {
            emailService.updateKey('trash', this.email.id)
            // SAVE ON THE COMANDS ORDER (first to the right folder, then isTrash)
            this.email.folder = this.email.isTrash ? 'deleted' : 'trash'
            this.email.isTrash = !this.email.isTrash
        },
        onRead() {
            emailService.updateKey('read', this.email.id)
            this.email.isRead = !this.email.isRead
        },
        onStar() {
            emailService.updateKey('important', this.email.id)
            this.email.isImportant = !this.email.isImportant
            this.email.folder = this.email.isImportant ? 'important' : 'inbox'

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