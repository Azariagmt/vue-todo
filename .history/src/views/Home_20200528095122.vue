<template>
  <div class="home">
    <v-container class="mx-5">
      <v-layout row wrap>
        <v-layout column="">
 <v-flex class="d-none d-sm-none d-md-flex" md3 lg3>
          <SingleDatePicker />
       </v-flex>
        </v-layout>
         
        <v-flex xs12 md6 lg6>
           <todo-list></todo-list>
        </v-flex>
       <v-flex class="d-none d-sm-none d-md-flex" md3 lg3>
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
