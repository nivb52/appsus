



export default {
    name: 'email-compose',
    template: `
    <section>
    
      <a class="compose-button" @click="isCompose = !isCompose" >+ Compose</a>
      <div class="new-email" v-show="isCompose">
        <div> To: 
               <input placeholder="mail@mail.com" type="text" v-model="to"/>
        </div>

        <div> Subject      
                <input placeholder="subject" type="text" v-model="subject"/>
        </div>

        <div> messege    
                     <textarea placeholder="tyoe here" type="text" v-model="body"></textarea>
        </div>
        <button @click="send-email"> SEND </button>
      </div>

    </section>
    `,
    data() {
        return {
            isCompose: false,
            to: '',
            subject: '',
            body: ''
        }
    },
methods: {
    sendEmail(){
        
    }
},
}