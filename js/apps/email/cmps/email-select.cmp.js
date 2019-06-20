

export default {
    name: 'email-select',
    template: `
        <div class="col col-1">
            <span class="dot"></span>
            <div class="checkbox-wrapper">
                 <input type="checkbox" id="chk1">
                 <label for="chk1" class="toggle"></label>
                 
            </div>
              
            <p class="title">{{email.from}}</p>

            <span class="star-toggle glyphicon glyphicon-star-empty">
            </span>
            <span @click="onTrash">§T</span>
              
        </div>
    
    
    `,
    props: ['email'],
    methods: {
        onTrash() {
            this.email.onTrash = true
            console.log('email moved to trash');

        }
    },
}