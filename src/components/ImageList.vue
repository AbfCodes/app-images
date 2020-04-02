<template>
  <div>
    <h1>lmage List</h1>
    <ul>
      <li v-for="imgs in allImages" :key="imgs.id">
        <img :src="imgs.link" alt="user Gallery images" />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'ImageList',

  methods: mapActions(['fetchImages']),

  computed: mapGetters(['allImages']),

  created() {
    this.fetchImages();
  }
};
</script>

<style></style>
