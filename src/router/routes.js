import Vue from 'vue';
import VueRouter from 'vue-router';
//components
import AuthHandler from '../components/AuthHandler.vue';
import ImageList from '../components/ImageList.vue';
import UploadForm from '../components/UploadForm.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  //takes path objs
  routes: [
    { path: '/', component: ImageList },
    { path: '/Upload', component: UploadForm },
    { path: '/oauth2/callback', component: AuthHandler }
  ]
});
