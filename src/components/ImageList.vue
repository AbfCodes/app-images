<template>
  <div class="container">
    <div v-if="isLoggedIn" class="parent">
      <h1>Image List :</h1>
      <div v-for="imgs in allImages" class="flow" :key="imgs.id">
        <img
          :src="imgs.link"
          style="width:290px; height:215px; border-radius: 4px;"
          alt="user Gallery images"
          class="zoom"
        />
      </div>
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
.container {
  margin: 2rem;
}
.parent {
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-template-rows: repeat(5, auto);
  grid-column-gap: 30px;
  grid-row-gap: 15px;
}
.zoom:hover {
  scale: 0.9%;
}
.flow {
  grid-auto-flow: dense;
}
</style>
