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
      return state.todos.filter((todo) => !todo.completed).length;
    },
    anyRemaining(state) {
      return this.remaining != 0;
    },
    todosFiltered(state) {
      if (state.filter == "all") {
        return state.todos;
      } else if (state.filter == "active") {
        return state.todos.filter((todo) => !todo.completed);
      } else if (state.filter == "completed") {
        return state.todos.filter((todo) => todo.completed);
      }
      return state.todos;
    },
    showClearCompletedButton(state) {
      return (
        state.todos.filter((todo) => todo.completed).length > 0
      );
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
