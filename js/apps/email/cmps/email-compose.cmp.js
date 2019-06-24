import { emailService } from '../emailservices/email.service.js'
import eventBusEmails from './eventBusEmails.cmp.js';




export default {
    name: 'email-compose',
    template: `
    <section class="compose-button" >
        <a @click="isCompose = !isCompose" >    + Compose </a>
      <div class="new-email" v-show="isCompose">
          <button class="send-email" @click="sendEmail"> SEND </button>
        <div> To: 
               <input placeholder="mail@mail.com" type="text" v-model="email.to"/>
        </div>

        <div> Subject      
                <input placeholder="subject" type="text" v-model="email.subject"/>
        </div>

        <div> messege    
                     <textarea placeholder="type here" type="text" v-model="email.body"></textarea>
        </div>
        <div class="margin-bottom "> </div>
      </div>

    </section>
    `,
    data() {
        return {
            isCompose: false,
            email: {
                to: '',
                subject: '',
                body: ''
            }
        }
    },
    methods: {
        sendEmail() {
            emailService.updateEmails(this.email)
            // window.open('mailto:test@example.com?subject=dadadaafaf  afa afa &body=body');
            // this.window.open('mailto:' + this.to + '?subject=' + this.subject + '&body=' + this.body);
            this.isCompose = !this.isCompose
            eventBusEmails.$emit('emailSent')
        }
    },
    components: {
        eventBusEmails
    }


}
