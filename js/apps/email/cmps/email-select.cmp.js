import { emailService } from '../emailservices/email.service.js'
import eventBusEmails from './eventBusEmails.cmp.js'

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
            const status = this.email.isTrash // if true it will be deleted
            this.email.folder = status ? 'deleted' : 'trash'

            // IF IT IS UNREAD
            if (!this.email.isRead) eventBusEmails.$emit('trash', status ? -1 : 1) // true = deleted = -1 
            this.email.isTrash = !this.email.isTrash
        },
        onRead() {
            emailService.updateKey('read', this.email.id)
            this.email.isRead = !this.email.isRead
            eventBusEmails.$emit('updateUnreadInFolder')
        },
        onStar() {
            emailService.updateKey('important', this.email.id)

            this.email.isImportant = !this.email.isImportant
            this.email.folder = this.email.isImportant ? 'important' : 'inbox'

            eventBusEmails.$emit('updateUnreadInFolder') // true = -1         
        }
    },
    computed: {
        iconIsRead() {
            // IF NOT READ : 
            if (!this.email.isRead) return "glyphicon glyphicon-eye-open"
            return "glyphicon glyphicon-eye-close" // or use : glyphicon-envelope
        }

    },
    components: {
        eventBusEmails

    }
}