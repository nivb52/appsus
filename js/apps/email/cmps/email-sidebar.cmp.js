import { emailService } from '../emailservices/email.service.js'

export default {
  name: 'email-sidebar',
  template: `
    
    <aside id="sidebar" class="nano">
    <div class="nano-content">
      <div class="logo-container"><span class="logo glyphicon glyphicon-envelope"></span>Mail</div><a
        class="compose-button">Compose</a>

      <menu class="menu-segment">
        <ul>
          <li class="active"> <router-link  :to="'/email'"> Inbox<span> ({{unread.inbox}})</span></router-link></li>
          <li><router-link  :to="'/email/important'"> Important<span> ({{unread.important}})</span></router-link></li>
          <li><router-link  :to="'/email/sent'">sent<span> ({{unread.sent}})</span></router-link></li>
          <li><router-link  :to="'/email/drafts'">drafts<span> ({{unread.drafts}})</span></router-link></li>
          <li><router-link  :to="'/email/trash'">trash<span> ({{unread.trash}})</span></router-link></li>
        </ul>
      </menu>


      <div class="separator"></div>
      <div class="menu-segment">
        <ul class="labels">
          <li class="title">Labels <span class="icon">+</span></li>
          <li><a href="#">Dribbble <span class="ball pink"></span></a></li>
          <li><a href="#">Roommates <span class="ball green"></span></a></li>
          <li><a href="#">Bills <span class="ball blue"></span></a></li>
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
      unread: {
        // TODO : RUN THE FUNC ONLY ONCE
        inbox: emailService.countUnreadInFolder()['inbox'] || 0,
        important: emailService.countUnreadInFolder()['important'] || 0,
        trash: emailService.countUnreadInFolder()['trash'] || 0,
        sent: emailService.countUnreadInFolder()['sent'] || 0,
        drafts: emailService.countUnreadInFolder()['drafts'] || 0,
        archive: emailService.countUnreadInFolder()['archive'] || 0
      }

    }
  },
  methods: {
    getUnread() {
      // this method will be run if there is a change from the eventBus
      // return x = { inbox, important, trash, sent, drafts, archive } = emailService.countUnreadInFolder()
    }
  },
  watch: {
    //TODO we need to change some data with eventBus and whenever it changed
    // to run a func to update those data
  },
}