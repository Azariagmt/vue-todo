<template>
  <div class="hello mt-4" deep-purple darken-4>
    <v-container class="ma-5 pa-5">
      <v-layout wrap row>
        <input
          type="text"
          class="todo-input"
          placeholder="what needs to be done"
          v-model="newTodo"
          @keyup.enter="addTodo"
        />
      </v-layout>
      <v-layout>
        
      </v-layout>
      <v-layout wrap column fluid>
        <div v-for="(todo, index) in todosFiltered" :key="todo.id" class="todo-item">
          <v-layout wrap row fluid>
          <div class="todo-item-left">
            <v-checkbox type="checkbox" v-model="todo.completed"></v-checkbox>
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
            <div class="grey--text">Due</div>
          </div>
          <v-btn fab class="remove-item" flat small dark color="pink" @click="removeTodo(index)">
            <v-icon>delete_outline</v-icon>
          </v-btn>
          </v-layout>
        </div>
      </v-layout>

      <div class="extra-container">
        <div>
          <label for>
            <v-checkbox type="checkbox" :checked="!anyRemaining" @change="checkAllTodos" />Check all
          </label>
        </div>
        <div>{{ remaining }} items left</div>
      </div>
      <div class="extra-container">
        <v-btn :class="{ active: filter == 'all' }" @click="changeFilter('all')">All</v-btn>
        <v-btn :class="{ active: filter == 'active' }" @click="changeFilter('active')">Active</v-btn>
        <v-btn
          :class="{ active: filter == 'completed' }"
          class="pink"
          @click="changeFilter('completed')"
        >Completed</v-btn>
      </div>
      <div>
        <v-btn v-if="showClearCompletedvButton" @click="clearCompleted">Clear Completed</v-btn>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "todo-list",
  props: {
    msg: String
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
          title: "Finish app",
          completed: false,
          editing: false
        },
        {
          id: 2,
          title: "Take over world",
          completed: false,
          editing: false
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
        editing: false
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
      this.todos.foreach(todo => (todo.completed = event.target.checked));
    },
    clearCompleted() {
      this.todos = this.todos.filter(todo => !todo.completed);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

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
  border: 1px solid white;
  margin-left: 12px;
}
.todo-item-edit {
  font-size: 24px;
  color: #2c3e50;
  margin-left: 12px;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc; //override defaults
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
