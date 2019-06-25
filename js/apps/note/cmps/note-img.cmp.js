export default {
    name: 'note-img',
    template: `
    <section class="note-img">
        <span> note img</span>    
        <input type="file"  @change="fileSelected" />
        <div class="preview"> 
            <img v-if="url" :src="url"/>
        </div>
</form> 
    </section>
    `,
    props: ['note'],
    data() {
        return {
            url: this.note.img || '',
        }
    },
    methods: {
        fileSelected(ev) {
            const file = ev.target.files[0];
            this.url = URL.createObjectURL(file)
        }
    }
}