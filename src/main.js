import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import {projectList} from './projects.js';
import './assets/css/global.css';

Vue.use(VueRouter);

Vue.config.productionTip = false

const Home = () => import('./components/Home.vue');
const Test = () => import('./components/Test.vue');
const Website = () => import('./components/Website.vue');
const Weather = () => import('./components/Weather.vue');
const Blog = () => import('./components/Blog.vue');
const Zelda = () => import('./components/Zelda.vue');
const Graphqljs = () => import('./components/GraphQLjs.vue');
const LaravelBlog = () => import('./components/LaravelBlog.vue');

//router config

const routes = [
  { path: '/', component: Home },
  { path: '/test', component: Test },
  { path: '/website', component: Website },
  { path: '/weather', component: Weather },
  { path: '/blog', component: Blog },
  { path: '/zelda', component: Zelda },
  { path: '/graphqljs', component: Graphqljs },
  { path: '/laravelblog', component: LaravelBlog },
  { path: '*', redirect: '/' }
];

const router = new VueRouter({
  routes
});

Vue.use(router);


//global breadcrumbs so components can pop and push without passing references to each other

Vue.prototype.$breadcrumbs = [
  {
    text: 'Back',
    disabled: false,
    to: '/'
  }
]

Vue.prototype.$projectList = projectList.reverse();


new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
