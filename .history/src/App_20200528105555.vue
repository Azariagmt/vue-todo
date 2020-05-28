<template>
  <v-app class="grey lighten-4">
   <navbar></navbar>
    <v-content class="mx-4">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  name: "App",
  components: {
    Navbar,
  
  },

  data: () => ({
    //
  })
};
</script>

<style scoped>
@import '~vue-single-date-picker/dist/vue-single-date-picker.css';
</style>