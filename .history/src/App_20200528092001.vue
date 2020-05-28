<template>
  <v-app class="grey lighten-4">
   <navbar></navbar>
    <v-content class="mx-4">
      <router-view></router-view>
      <SingleDatePicker />
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";

import SingleDatePicker from 'vue-single-date-picker';

export default {
  name: "App",

  components: {
    Navbar,
    SingleDatePicker
  },

  data: () => ({
    //
  })
};
</script>

<style scoped>
@import '~vue-single-date-picker/dist/vue-single-date-picker.css';
</style>