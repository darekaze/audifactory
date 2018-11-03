import Vue from 'vue';
import Router from 'vue-router';
import Home from './Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './About.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () =>
        import(/* webpackChunkName: "auth" */ './Register.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () =>
        import(/* webpackChunkName: "auth" */ './Login.vue'),
    },
    {
      path: '/albums',
      name: 'albums',
      component: () =>
        import(/* webpackChunkName: "albums" */ './Albums.vue'),
    },
    {
      path: '/albums/:albumId',
      name: 'album',
      component: () =>
        import(/* webpackChunkName: "albums" */ './ViewAlbum.vue'),
    },
    {
      path: '/albums/add', /* should protect this path */
      name: 'albums-add',
      component: () =>
        import(/* webpackChunkName: "albums-add" */ './admin/AddAlbum.vue'),
    },
  ],
});

// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
