export default {
    name: 'TheAppHeader',
    template: `
            <header>
                <nav>
                    <router-link exact to="/">Home</router-link> | 
                    <router-link to="/about">About</router-link> |
                    <router-link to="/email">emailApp</router-link> |
                    <router-link to="/keep">keepApp</router-link> 
                </nav>
            </header>    
    
    `
}