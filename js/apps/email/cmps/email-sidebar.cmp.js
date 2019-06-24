import { emailService } from '../emailservices/email.service.js'
import emailCompose from './email-compose.cmp.js'
import eventBusEmails from './eventBusEmails.cmp.js'


export default {
  name: 'email-sidebar',
  template: `
    
    <aside id="sidebar" class="nano">
    <div class="nano-content">
      <div class="logo-container"><span class="logo glyphicon glyphicon-envelope"></span>Mail</div>


      <menu class="menu-segment">
        <ul>
          <li> <router-link exact :to="'/email'"> Inbox<span> ({{unread.inbox || 0}})</span></router-link></li>
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
          <li><router-link :to="'/email/l/marketing'"><span class="ball pink"></span> Marketing &nbsp;</router-link></li>
          <li><router-link :to="'/email/l/work'"><span class="ball green"></span> Work    &nbsp; </router-link></li>
          <li><router-link :to="'/email/l/bills'" ><span class="ball blue"></span> Bills  &nbsp;  </router-link></li>
          <li><router-link :to="'/email/l/google'" ><span class="ball red"></span> Google &nbsp;</router-link></li>
          <li><router-link :to="'/email/l/social'" ><span class="ball green"></span> Social  &nbsp; </router-link></li>
          <li><router-link :to="'/email/l/toread'" ><span class="ball blue"></span> לקרוא &nbsp;</router-link></li>
          <li><router-link :to="'/email/l/pictures'" ><span class="ball pink"></span> תמונות &nbsp;</router-link></li>
          <li><router-link :to="'/email/l/meetings'" ><span class="ball green"></span> Meeting &nbsp;</router-link></li>
          <li><router-link :to="'/email/l/diggers'" ><span class="ball red"></span> Dribble &nbsp; </router-link></li>
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