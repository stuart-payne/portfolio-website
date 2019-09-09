import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

Vue.config.productionTip = false

const Home = () => import('./components/Home.vue');
const ProjectMenu = () => import('./components/ProjectMenu.vue');
const ProjectView = () => import('./components/ProjectView.vue');

//router config

const routes = [
  { path: '/', component: Home },
  { path: '/projects', component: ProjectMenu},
  {
    path: '/project/:id',
    component: ProjectView,
    props: (route) => {
      return {
        project: route.params.id
      };
    }
  },
  { path: '*', redirect: '/' }
];

const router = new VueRouter({
  routes
});

Vue.use(router);


//global breadcrumbs so components can pop and push without passing references to each other

Vue.prototype.$breadcrumbs = [
  {
    text: 'Home',
    disabled: false,
    to: '/'
  }
]


new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
