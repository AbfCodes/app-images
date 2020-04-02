import Vue from 'vue';
import Vuex from 'vuex';
//auth module
import auth from './modules/auth';
//images module
import images from './modules/images';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { auth, images }
});
