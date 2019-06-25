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


