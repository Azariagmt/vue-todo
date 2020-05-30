<template>
  <div class="hello mt-4" deep-purple darken-4>
    <v-container class="ma-5 pa-5">
      <v-layout wrap row>
        <v-flex xs12 md12>
          <div class="text-center">
            <v-dialog v-model="dialog" width="500">
              <template v-slot:activator="{ on }">
                <v-btn class="deep-purple mb-5" dark v-on="on">Add New todo</v-btn>
              </template>
              <v-card>
                <v-card-title class="headline grey lighten-2" primary-title>Add a New todo</v-card-title>
                <v-card-text>
                  <v-form class="px-3">
                    <v-text-field label="Title" v-model="newTodo" prepend-icon="folder"></v-text-field>
                    <v-menu max-width="290">
                      <template v-slot:activator="{ on }">
                        <v-text-field
                          :value="formattedDate"
                          label="Due date"
                          prepend-icon="mdi-calendar-range"
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker v-model="due"></v-date-picker>
                    </v-menu>
                    <v-btn flat class="deep-purple white--text" @click="addTodo" @keyup.enter="addTodo"`>Add todo</v-btn>
                  </v-form>
                </v-card-text>
              </v-card>
            </v-dialog>
          </div>
        </v-flex>
      </v-layout>
      <v-layout row fluid wrap>
        <v-layout wrap column fluid>
          <!--todo loop starts here-->

          <div v-for="(todo, index) in todosFiltered" :key="todo.id" class="todo-item">
            <v-layout wrap row fluid>
              <v-flex xs1>
                <v-checkbox type="checkbox" v-model="todo.completed" />
              </v-flex>
              <v-flex xs7>
                <div
                  class="todo-item-label"
                  v-if="!todo.editing"
                  @dblclick="editTodo(todo)"
                  :class="{
            completed: todo.completed
          }"
                >{{ todo.title }}</div>
                <input
                  v-else
                  class="todo-item-edit"
                  type="text"
                  v-model="todo.title"
                  @blur="doneEdit(todo)"
                  @keyup.enter="doneEdit(todo)"
                  @keyup.esc="cancelEdit(todo)"
                  v-focus
                />
                <div class="grey--text">
                  <input type="date" v-model="todo.due" />
                </div>
              </v-flex>
              <v-flex xs2></v-flex>
              <v-flex xs2>
                <v-btn
                  fab
                  class="remove-item"
                  flat
                  small
                  dark
                  color="purple"
                  @click="removeTodo(index)"
                >
                  <v-icon>delete_outline</v-icon>
                </v-btn>
              </v-flex>
            </v-layout>
          </div>

          <!-- v-for end -->
        </v-layout>
      </v-layout>
      <hr />
      <div class="extra-container">
        <div>
          <label for>
            <input type="checkbox" :checked="!anyRemaining" @change="checkAllTodos" />Check all
          </label>
        </div>
        <div>{{remaining}} items left</div>
      </div>
      <div class="extra-container">
        <v-btn :class="{ active: filter == 'all' }" @click="filter='all'">All</v-btn>
        <v-btn :class="{ active: filter == 'active' }" @click="filter='active'">Active</v-btn>
        <v-btn :class="{ active: filter == 'completed' }" @click="filter='completed'">Completed</v-btn>
      </div>
      <div>
        <transition name="fade">
          <v-btn v-if="showClearCompletedButton" @click="clearCompleted">Clear Completed</v-btn>
        </transition>
      </div>
    </v-container>
  </div>
</template>

<script>
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";

export default {
  name: "todo-list",
  props: {
    msg: String
  },
  components: {},
  data: function() {
    return {
      dialog: false,
      newTodo: "",
      idForTodo: 1,
      beforeEditCache: "",
      filter: "all",
      due: null,
      todos: [
        {
          id: 1,
          title: "krambababam",
          completed: false,
          editing: false,
          due: "30th May 2020"
        },
        {
          id: 2,
          title: "task 2",
          completed: false,
          editing: false,
          due: "20th May 2030"
        }
      ]
    };
  },

  directives: {
    focus: {
      inserted: function(el) {
        el.focus();
      }
    }
  },
  computed: {
    remaining() {
      return this.$store.getters.remaining;
    },
    anyRemaining() {
      return this.$store.getters.anyRemaining;
    },
    todosFiltered() {
      return this.$store.getters.todosFiltered;
    },
    showClearCompletedButton() {
      return this.$store.getters.showClearCompletedButton;
    },
    formattedDate() {
      return this.due ? format(parseISO(this.due), "do MMM yyyy") : "";
    }
  },
  methods: {
    addTodo: function() {
      if (this.newTodo.trim().length == 0) {
        return;
      }
      this.$store.state.todos.push({
        id: this.idForTodo,
        title: this.newTodo,
        completed: false,
        editing: false,
        due: this.due
      });
      this.newTodo = "";
      this.idForTodo++;
      this.dialog = false;
    },
    removeTodo(index) {
      this.$store.state.todos.splice(index, 1);
    },
    editTodo(todo) {
      this.beforeEditCache = todo.title;
      todo.editing = true;
    },
    doneEdit(todo) {
      if (todo.title.trim().length == 0) {
        todo.title = this.beforeEditCache;
      }
      todo.editing = false;
    },
    cancelEdit(todo) {
      todo.title = this.beforeEditCache;
      todo.editing = false;
    },
    checkAllTodos() {
      this.$store.state.todos.forEach(
        todo => (todo.completed = event.target.checked)
      );
    },
    clearCompleted() {
      this.$store.state.todos = this.$store.state.todos.filter(
        todo => !todo.completed
      );
    }
    // TODO:sort functionality to be added
    //sortBy(prop){
    //   this.$store.state.todos.sort()
    // }
  }
};
</script>

<style lang="scss">
.todo-input {
  width: 100%;
  padding: 10px 18px;
  font-size: 18px;
  margin-bottom: 16px;
  &:focus {
    outline: 0;
  }
}
.todo-item {
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  animation-duration: 0.3s;
}
.remove-item {
  cursor: pointer;
  margin-left: 14px;
  &:hover {
    color: black;
  }
}
.todo-item-left {
  display: flex;
  align-items: center;
}
.todo-item-label {
  padding: 10px;
  border: 1px solid rgb(71, 70, 70);
  margin-left: 8px;
}
.todo-item-edit {
  margin-left: 8px;
  width: 100%;
  padding: 10px;
  border: 1px solid rgb(255, 252, 252); //override defaults
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  &:focus {
    outline: none;
  }
}
.completed {
  text-decoration: line-through;
  color: grey;
}
.extra-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  border-top: 1px solid lightgrey;
  padding-top: 14px;
  margin-bottom: 14px;
}
.name-container {
  margin-bottom: 16px;
}
button {
  font-size: 14px;
  background-color: white;
  appearance: none;
  padding: 4px;
  &:hover {
    background: lightgreen;
  }
  &:focus {
    outline: none;
  }
}
.active {
  background: lightgreen;
}
// CSS Transitions
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
