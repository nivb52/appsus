import { emailService } from '../emailservices/email.service.js'
import eventBusEmails from './eventBusEmails.cmp.js'

export default {
    name: 'email-select',
    template: `

    
    <div >
        <img  v-show="!isActions" class="circle-avatar actions" :src="email.avatar" @click="isActions = !isActions"/>
        <span v-show="!isActions"  @click="isActions = !isActions" class="title">{{emailFrom}}</span>

        <div class="col col-1 actions" v-show="isActions" id="icons">
            <span @click="isActions = !isActions">👈</span>
            <span @click="onRead" :class=iconIsRead></span>
            <span @click="onTrash">🗑</span>
            <span @click="onStar" >☆</span>
            <!--  -->
            <!-- star-toggle glyphicon glyphicon-star-empty -->
        </div>
    </div>
    
    
    `,
    data() {
        return {
            isActions: false
        }
    },
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
        },
        emailFrom() {
            const longBodySign = this.email.subject.charAt(20) !== '' ? '...' : ''
            return this.email.from.substring(0, 20) + longBodySign
        },

    },
    components: {
        eventBusEmails

    }
}