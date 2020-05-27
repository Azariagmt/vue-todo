<template>
  <v-app class="grey lighten-4">
   <navbar></navbar>
    <v-content>
   
      <todo-list></todo-list>
      <router-view></router-view>
      <div style="width">
      <SingleDatePicker />
      </div>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import SingleDatePicker from 'vue-single-date-picker';

export default {
  name: "App",

  components: {
    Navbar,
    TodoList,
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