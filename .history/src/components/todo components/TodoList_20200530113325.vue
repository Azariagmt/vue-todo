<template>
  <div class="hello mt-4" deep-purple darken-4>
    <v-container class="ma-5 pa-5">
      <v-layout wrap row>
        <v-flex xs12 md12>
          <Popup/>
          <input
            type="text"
            class="todo-input"
            placeholder="Welcome, add your todo here!"
            v-model="newTodo"
            @keyup.enter="addTodo"
          />
        </v-flex>
        <v-flex class="mb-5 ml-5">
          <span class="mr-3">Due for:</span>
          <input type="date" name id v-model="dueDate" />
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
                  <input type="date" v-model="todo.dueDate" />
                </div>
              </v-flex>
              <v-flex xs2>
                
              </v-flex>
              <v-flex xs2>
                <v-btn
                  fab
                  class="remove-item"
                  flat
                  small
                  dark
                  color="pink"
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
import Popup from './Popup';

export default {
  name: "todo-list",
  props: {
    msg: String
  },
  components:{
    Popup
  },
  data: function() {
    return {
      newTodo: "",
      idForTodo: 3,
      beforeEditCache: "",
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
      return this.todos.filter(todo => !todo.completed).length;
    },
    anyRemaining() {
      return this.remaining != 0;
    },
    todosFiltered() {
      if (this.filter == "all") {
        return this.todos;
      } else if (this.filter == "active") {
        return this.todos.filter(todo => !todo.completed);
      } else if (this.filter == "completed") {
        return this.todos.filter(todo => todo.completed);
      }
      return this.todos;
    },
    showClearCompletedButton() {
      return this.todos.filter(todo => todo.completed).length > 0;
    }
  },
  methods: {
    addTodo: function() {
      if (this.newTodo.trim().length == 0) {
        return;
      }
      this.todos.push({
        id: this.idForTodo,
        title: this.newTodo,
        completed: false,
        editing: false,
        due: "50th july 2000"
      });

      this.newTodo = "";
      this.idForTodo++;
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
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
      this.todos.forEach(todo => (todo.completed = event.target.checked));
    },
    clearCompleted() {
      this.todos = this.todos.filter(todo => !todo.completed);
    },
    // TODO:sort functionality to be added 
    //sortBy(prop){
    //   this.todos.sort()
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
