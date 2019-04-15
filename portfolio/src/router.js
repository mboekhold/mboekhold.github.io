import Vue from 'vue'
import Router from 'vue-router'
import Projects from './components/Projects.vue'
import About from './components/About.vue'
import Resume from './components/Resume.vue'

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
        path: '/resume',
        name: 'resume',
        component: Resume
    }
    
  ],

  linkActiveClass: 'active',
  linkExactActiveClass: "active"
});