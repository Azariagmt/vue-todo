<template>
  <div class="home">
    <v-container class="mx-5">
      <v-layout>
          <v-flex>
          <SingleDatePicker />
       </v-flex>
        <v-flex>
           <todo-list></todo-list>
        </v-flex>
       <v-flex md>
         <right-side />
       </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import TodoList from "@/components/TodoList.vue";
import SingleDatePicker from "vue-single-date-picker";
import RightSide from "@/components/RightSide.vue"

export default {
  name: "Home",
  components: {
    TodoList,
    SingleDatePicker,
    RightSide
  }
};
</script>
