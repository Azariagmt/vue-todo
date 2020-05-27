<template>
  <v-app>

    <v-content deep-purple
    >
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
