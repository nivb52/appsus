import homepageCmp from './pages/hompage.cmp.js';
import aboutCmp from './pages/about.cmp.js';
import emailApp from './pages/email.app.cmp.js';
import notesApp from './pages/notes.app.cmp.js';
import emailDetails from './apps/email/cmps/email-details.cmp.js'
import emailSidebar from './apps/email/cmps/email-sidebar.cmp.js'
// import keepApp from './pages/keep-app.cmp.js';

export default [
    { path: '/', component: homepageCmp },
    { path: '/about', component: aboutCmp },
    { path: '/email', component: emailApp },
    { path: '/notes', component: notesApp },
    { path: '/email/:folder', component: emailApp },
    { path: '/email/l/:labels', component: emailApp },
    // { path: '/email/l/:id', component: emailSidebar },
    { path: '/email/m/:id', component: emailDetails },
    // { path: '/keep', component: keepApp },
]