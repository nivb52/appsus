export default {
    name: 'note-img',
    template: `
    <section class="note-img">
        <h1> Welcome to note img</h1>    
        <input type="file"  @change="fileSelected" />
        <div class="preview"> 
            <img v-if="url" :src="url"/>
        </div>
</form> 
    </section>
    `,
    data() {
        return {
            url: null,
        }
    },
    methods: {
        fileSelected(ev) {
            const file = ev.target.files[0];
            this.url = URL.createObjectURL(file)
        }
    }
}