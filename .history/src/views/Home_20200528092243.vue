<template>
  <div class="home">

   <todo-list></todo-list>
  </div>
</template>

<script>
// @ is an alias to /src
import TodoList from '@/components/TodoList.vue';
import SingleDatePicker from 'vue-single-date-picker';

export default {
  name: "Home",
  components: {
    TodoList,
      SingleDatePicker
  }
};
</script>
