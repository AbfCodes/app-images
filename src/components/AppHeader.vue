<template>
  <div>
    <div class="ui h1 secondary pointing menu">
      <a class="active item">Image Storage</a>

      <div v-if="isLoggedIn" class="right menu">
        <router-link class="ui item" @click.self="login">Galleries</router-link >
        <router-link class="ui item" @click.self="login">Upload</router-link >
        <router-link class="ui item" @click.self="logout">Logout</router-link >
      </div>
      <div v-else class="right menu">
        <a class="ui item" @click.self="login">Login</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'AppHeader',
  data() {
    return {
      //vars
    };
  },
  computed: mapGetters(['isLoggedIn']),
  methods: {
    ...mapActions(['login', 'logout'])
  }
};
</script>

<style></style>
