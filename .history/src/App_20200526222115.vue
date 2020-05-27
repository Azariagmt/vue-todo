<template>
  <v-app>

    <v-content>
      <todo-list></todo-list>
      <rout>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import TodoList from "./components/TodoList";

export default {
  name: "App",

  components: {
    HelloWorld,
    TodoList
  },

  data: () => ({
    //
  })
};
</script>
