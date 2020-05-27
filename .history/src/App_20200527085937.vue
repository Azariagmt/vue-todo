<template>
  <v-app>

    <v-content class="deep-purple lighten-4 grey--text text--darken-4">
      <todo-list></todo-list>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import TodoList from "./components/TodoList";

export default {
  name: "App",

  components: {
    TodoList
  },

  data: () => ({
    //
  })
};
</script>
