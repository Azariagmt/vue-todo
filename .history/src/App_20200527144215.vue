<template>
  <v-app class="grey lighten-4">
   <navbar></navbar>
    <v-content>
   
      <todo-list></todo-list>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";

export default {
  name: "App",

  components: {
    Navbar,
    TodoList
  },

  data: () => ({
    //
  })
};
</script>
