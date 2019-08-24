import Vue from 'vue'
import Router from 'vue-router'
import Projects from './components/Projects.vue'
import About from './components/About.vue'
import Resume from './components/Resume.vue'
import Contact from './components/Contact.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'projects',
      component: Projects
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
        path: '/resume',
        name: 'resume',
        component: Resume
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
  }
    
  ],

  linkActiveClass: 'active',
  linkExactActiveClass: "active"
});