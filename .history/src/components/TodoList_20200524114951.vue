<template>
  <div class="hello">
      <input type="text" class="todo-input" placeholder="what needs to be done" v-model="newTodo" @keyup.enter="addTodo">
      <div v-for="todo in todos" :key="todo.id" class="todo-item">
          {{ todo.title }}
      </div>
  </div>
</template>

<script>
export default {
  name: "todo-list",
  props: {
    msg: String
  },
  data: function(){
      return{
          newTodo: '',
          todos: [
              {
                  'id':1,
                  'title': 'Finish app',
                  'completed' : false
              },
                {
                  'id':2,
                  'title': 'Take over world',
                  'completed' : false
              }
          ]
      }
  },
  methods: {
      addTodo: function(){
          this.todos.push()
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss">
.todo-input{
    width: 100%;
    padding: 10px 18px;
    font-size: 18px;
    margin-bottom: 16px;
    &:focus{
        outline: 0;
    }
}

</style>
