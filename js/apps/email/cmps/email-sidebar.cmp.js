import { emailService } from '../emailservices/email.service.js'
import emailCompose from './email-compose.cmp.js'
import eventBusEmails from './eventBusEmails.cmp.js'


export default {
  name: 'email-sidebar',
  template: `
    
    <aside id="sidebar" class="nano">
    <div class="nano-content">
      <div class="logo-container"><span class="logo glyphicon glyphicon-envelope"></span>Mail</div><a
        class="compose-button" @click="isCompose = !isCompose" >Compose</a>
        <email-compose v-show="isCompose"></email-compose>



      <menu class="menu-segment">
        <ul>
          <li class="active"> <router-link  :to="'/email'"> Inbox<span> ({{unread.inbox || 0}})</span></router-link></li>
          <li><router-link  :to="'/email/important'"> Important<span> ({{unread.important || 0}})</span></router-link></li>
          <li><router-link  :to="'/email/sent'">sent<span> ({{unread.sent || 0}})</span></router-link></li>
          <li><router-link  :to="'/email/drafts'">drafts<span> ({{unread.drafts || 0}})</span></router-link></li>
          <li><router-link  :to="'/email/trash'">trash<span> ({{unread.trash || 0}})</span></router-link></li>
        </ul>
      </menu>


      <div class="separator"></div>
      <div class="menu-segment">
        <ul class="labels">
          <li class="title">Labels <span class="icon">+</span></li>
          <li><router-link :to="'/email/l/marketing'"> Marketing <span class="ball pink"></span></router-link></li>
          <li><router-link :to="'/email/l/work'"> Work <span class="ball green"></span></router-link></li>
          <li><router-link :to="'/email/l/bills'" >Bills <span class="ball blue"></span></router-link></li>
          <li><router-link :to="'/email/l/google'" >Google <span class="ball "></span></router-link></li>
          <li><router-link :to="'/email/l/social'" >Social <span class="ball green"></span></router-link></li>
          <li><router-link :to="'/email/l/toread'" >לקרוא <span class="ball blue"></span></router-link></li>
          <li><router-link :to="'/email/l/pictures'" >תמונות <span class="ball pink"></span></router-link></li>
          <li><router-link :to="'/email/l/meetings'" >Meetings <span class="ball green"></span></router-link></li>
          <li><router-link :to="'/email/l/diggers'" >החופרים <span class="ball"></span></router-link></li>
        </ul>
      </div>
      <div class="separator"></div>
      <div class="menu-segment">
        <ul class="chat">
          <li class="title">Chat <span class="icon">+</span></li>
          <li><a href="#"><span class="ball green"></span>Laura Turner</a></li>
          <li><a href="#"><span class="ball green"></span>Kevin Jones</a></li>
          <li><a href="#"><span class="ball blue"></span>John King</a></li>
          <li><a href="#"><span class="ball blue"></span>Jenny Parker</a></li>
          <li><a href="#"><span class="ball blue"></span>Paul Green</a></li>
          <li><a href="#" class="italic-link">See offline list</a></li>
        </ul>
      </div>
      <div class="bottom-padding"></div>
    </div>
  </aside> 
    
    `,
  data() {
    return {
      unread: emailService.countUnreadInFolder(),
      isCompose: false,

    }
  },
  methods: {
    updateTrash(diff) {
      this.unread['trash'] += diff
    },
    test() {
      return emailService.countUnreadInFolder()
      // this.unread = currUnread
    }
  },
  created() {
    eventBusEmails.$on('updateUnreadInFolder', () => {
      let currUnread = emailService.countUnreadInFolder()
      this.unread = currUnread
    })

    eventBusEmails.$on('trash', diff => {
      this.updateTrash(diff)
    })

  },
  computed: {

  },
  components: {
    emailCompose,
    eventBusEmails
  }

}