<template>
  <div>
    <div v-if="isLoggedIn" class="image-container">
      <!-- <h1>Image List :</h1> -->
      <img
        v-for="imgs in allImages"
        :key="imgs.id"
        :src="imgs.link"
        alt="user Gallery images"
      />
    </div>
    <div style="text-align:center;" v-else>
      <h2>Please Login to get Started !</h2>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'ImageList',

  methods: mapActions(['fetchImages']),

  computed: mapGetters(['allImages', 'isLoggedIn']),

  created() {
    this.fetchImages();
  }
};
</script>

<style scoped>
.image-container {
  column-count: 3;
  column-gap: 2rem;
  /* row-gap: 2rem; */
}
img {
  max-width: 100%;
  padding: 5px;
  transition: 250ms;
}

img:hover {
  scale: 0.9%;
}
</style>
