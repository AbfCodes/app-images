<template>
  <div class="shadow">
    <!-- <h1>Upload Form</h1> -->
    <input
      type="file"
      name="image uploader"
      multiple
      accept="image/*"
      @change.self="uploadImages($event.target.files)"
    />
    <span>Drag files here!</span>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'UploadForm',
  methods: mapActions(['uploadImages'])
};
</script>

<style scoped>
.dropper {
  height: 30vh;
  border: 2px solid black;
  border-radius: 5px;
}

input[type='file'] {
  height: 30vh;
  width: 100%;
  opacity: 0;
  position: absolute;
}
span {
  font-size: 4rem;
  font-weight: bolder;
}
.shadow {
  text-align: center;
  margin-top: 5rem;
  height: 40vh;
  background-color: cornflowerblue;
  -webkit-box-shadow: 0px 5px 15px 3px rgba(0, 0, 0, 0.47);
  box-shadow: 0px 5px 15px 3px rgba(0, 0, 0, 0.47);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.shadow:hover {
  background-color: rgb(10, 185, 77);
}
</style>
