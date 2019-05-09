import Vue from 'vue'
import Router from 'vue-router'
import Projects from './components/Projects.vue'
import About from './components/About.vue'
import CV from './components/CV.vue'
import Contact from './components/Contact.vue'

Vue.use(Router);

export default new Router({
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
        path: '/cv',
        name: 'cv',
        component: CV
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