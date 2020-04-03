<template>
  <div>
    <div class="ui h1 secondary pointing menu">
      <a class="active item">Image Storage</a>

      <div v-if="isLoggedIn" class="right menu">
        <router-link to="/" exact active-class="active" class="ui item"
          >Galleries</router-link
        >
        <router-link to="/upload" active-class="active" class="ui item"
          >Upload</router-link
        >
        <a tag="a" class="ui item" @click.self="logout">Logout</a>
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
