

export default {
  name: 'email-preview',
  template: `

       <li :class="email.isRead ? '' : 'unread' ">
            <div class="col col-1"><span class="dot"></span>
              <div class="checkbox-wrapper">
                <input type="checkbox" id="chk1">
                <label for="chk1" class="toggle"></label>
              </div>

              <p class="title max-width">{{email.from}}</p>
               <span
                class="star-toggle glyphicon glyphicon-star-empty">
              </span>

            </div>

            <div class="col col-2">
              <div class="title subject">{{email.subject}}</span></div>
              <div class="subject">{{emailBody}}</span></div>
              <div class="date">11:49 am</div>
            </div>
          </li>


`,
  props: ['email'],
  mounted() {

  },
  computed: {
    emailBody() {
      return this.email.body.substring(1, 30)
    }
  },



}



// s="unread">
//             <div class="col col-1"><span class="dot"></span>
//               <div class="checkbox-wrapper">
//                 <input type="checkbox" id="chk1">
//                 <label for="chk1" class="toggle"></label>
//               </div>
//               <p class="title">Lucas Kriebel (via Twitter)</p><span
//                 class="star-toggle glyphicon glyphicon-star-empty"></span>
//             </div>
//             <div class="col col-2">
//               <div class="subject">Lucas Kriebel (@LucasKriebel) has sent you a direct message on Twitter!
//                 &nbsp;&ndash;&nbsp; <span class="teaser">@LucasKriebel - Very cool :) Nicklas, You have a new direct
//                   message.</span></div>
//               <div class="date">11:49 am</div>
//             </div>
//           </li>