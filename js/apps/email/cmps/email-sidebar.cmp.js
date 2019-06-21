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
          <li class="active"><a href="#">Inbox<span> ({{inbox}})</span></a></li>
          <li><a href="#">Important<span> ({{important}})</span></a></li>
          <li><a href="#">sent<span> ({{sent}})</span></a></li>
          <li><a href="#">drafts<span> ({{drafts}})</span></a></li>
          <li><a href="#">trash<span> ({{trash}})</span></a></li>
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
      inbox: emailService.countUnreadInFolder()['inbox'] || 0,
      important: emailService.countUnreadInFolder()['important'] || 0,
      trash: emailService.countUnreadInFolder()['trash'] || 0,
      sent: emailService.countUnreadInFolder()['sent'] || 0,
      drafts: emailService.countUnreadInFolder()['drafts'] || 0,
      archive: emailService.countUnreadInFolder()['archive'] || 0
    }
  },

}