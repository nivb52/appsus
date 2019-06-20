

export default {
    name: 'email-filter',
    template: `
    <div class="search-box">
        <input type="text" placeholder="Search..."  v-model="filterBy.string" @keyup.enter="emitSearch" @input="emitSearch" ><span class="icon glyphicon glyphicon-search"></span>
    </div>

`,
    data() {
        return {
            filterBy: {
                string: null
            }
        }
    },
    methods: {
        emitSearch() {
            this.$emit('set-filter', this.filterBy)
        }

    }
}
