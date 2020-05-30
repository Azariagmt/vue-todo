import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    filter: "all",
    todos: [
      {
        id: 1,
        title: "krambababam",
        completed: false,
        editing: false,
        dueDate: "05-20-2020",
      },
      {
        id: 2,
        title: "task 2",
        completed: false,
        editing: false,
        dueDate: "20th jan 2030",
      },
    ],
  },
  getters: {
    remaining(state) {
      return this.$store.state.todos.filter((todo) => !todo.completed).length;
    },
    anyRemaining(state) {
      return this.remaining != 0;
    },
    todosFiltered(state) {
      if (this.$store.state.filter == "all") {
        return this.$store.state.todos;
      } else if (this.$store.state.filter == "active") {
        return this.$store.state.todos.filter((todo) => !todo.completed);
      } else if (this.$store.state.filter == "completed") {
        return this.$store.state.todos.filter((todo) => todo.completed);
      }
      return this.$store.state.todos;
    },
    showClearCompletedButton(state) {
      return (
        this.$store.state.todos.filter((todo) => todo.completed).length > 0
      );
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
