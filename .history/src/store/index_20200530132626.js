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
        dueDate: "05-20-2020"
      },
      {
        id: 2,
        title: "task 2",
        completed: false,
        editing: false,
        dueDate: "20th jan 2030"
      }
    ]
  },
  get
  mutations: {},
  actions: {},
  modules: {}
});
