<template>
  <div class="center">
    <h1>Please wait ...</h1>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AuthHandler',
  methods: mapActions(['finalizeLogin']),
  created() {
    // console.log('created', window.location.hash);
    this.finalizeLogin(window.location.hash);
  }
};
</script>

<style scoped>
.center {
  text-align: center;

  padding-top: 9rem;
}
</style>
