import emailPreview from './email-preview.cmp.js';

export default {
    name: 'email-list',
    template: `
<section>
    <!-- <div class="action-bar">
      <ul>
        <li><a class="icon circle-icon glyphicon glyphicon-chevron-down"></a></li>
        <li><a class="icon circle-icon glyphicon glyphicon-refresh"></a></li>
        <li><a class="icon circle-icon glyphicon glyphicon-share-alt"></a></li>
        <li><a class="icon circle-icon red glyphicon glyphicon-remove"></a></li>
        <li><a class="icon circle-icon red glyphicon glyphicon-flag"></a></li>
      </ul>
    </div> -->

    <div id="main-nano-wrapper" class="nano">
      <div class="nano-content">
        <ul class="message-list">
            <router-link :to="'/email/' + email.id" v-for="email in emails" :email="email" :key="email.id">
                <email-preview :email="email" ></email-preview>
            </router-link>
        </ul>
     </div>
    </div>
</section>

    `,
    props: ['emails'],
    data() {
        return {

        }
    },
    mounted() {
        console.log('email list is on');

    },
    components: {
        emailPreview,
    }
}