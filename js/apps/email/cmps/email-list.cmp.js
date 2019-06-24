import emailPreview from './email-preview.cmp.js';

export default {
    name: 'email-list',
    template: `
<section>

    <div id="main-nano-wrapper" class="nano">
      <div class="nano-content">
          
        <ul class="message-list" >
          <email-preview v-for="email in emails"  :key="email.id" :email="email" ></email-preview>
        </ul>

     </div>
    </div>

</section>

    `,
    props: ['emails'],
    components: {
        emailPreview,
    },
}


