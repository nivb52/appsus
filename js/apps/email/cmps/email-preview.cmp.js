import emailSelect from './email-select.cmp.js'

export default {
  name: 'email-preview',
  template: `

       <li :class="email.isRead ? '' : 'unread' ">
         <email-select :email="email"></email-select>         
         <router-link  :to="'/email/m/' + email.id"  :email="email" >
      
           <div class="col col-2">
         <div class="subject"> <span>{{emailSubject}} - </span> {{emailBody}}</span></div>
         <div class="date">{{emailDate}}</div>
              
              
            </div>
            <div class="separator"></div>
          </router-link>
          </li>


`,
  props: ['email'],
  mounted() {

  },
  computed: {
    emailSubject() {
      const longBodySign = this.email.subject.charAt(50) !== '' ? '...' : ''
      return this.email.subject.substring(0, 50) + longBodySign
    },
    emailBody() {
      const longBodySign = this.email.body.charAt(50) !== '' ? '...' : ''
      return this.email.body.substring(0, 50) + longBodySign
    },
    emailDate() {
      let sentDate = (this.email.sentAt)
      return sentDate
    },

  },

  components: {
    emailSelect
  }



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