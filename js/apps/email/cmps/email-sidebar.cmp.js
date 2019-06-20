
export default {
    name: 'email-sidebar',
    template: `
    
    <aside id="sidebar" class="nano">
    <div class="nano-content">
      <div class="logo-container"><span class="logo glyphicon glyphicon-envelope"></span>Mail</div><a
        class="compose-button">Compose</a>
      <menu class="menu-segment">
        <ul>
          <li class="active"><a href="#">Inbox<span> (43)</span></a></li>
          <li><a href="#">Important</a></li>
          <li><a href="#">Sent</a></li>
          <li><a href="#">Drafts</a></li>
          <li><a href="#">Trash</a></li>
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
}