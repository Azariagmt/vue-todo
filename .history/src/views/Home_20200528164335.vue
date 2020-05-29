<template>
  <div class="home">
    <v-container fluid>
      <v-layout row wrap>
        <v-flex md3 class="d-none d-sm-none d-md-flex calendar">
          <v-container>
            <SingleDatePicker />
          </v-container>
        </v-flex>
        <v-flex md6>
          <v-layout column xs12 md8 lg8 class="mt-5">
            <v-card flat>
              <todo-list></todo-list>
            </v-card>
          </v-layout>
        </v-flex>
        <v-flex md3 class="d-none d-sm-none d-md-flex">
          <v-container>
            <right-side />
          </v-container>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import TodoList from "@/components/TodoList.vue";
import SingleDatePicker from "vue-single-date-picker";
import RightSide from "@/components/RightSide.vue";

export default {
  name: "Home",
  components: {
    TodoList,
    SingleDatePicker,
    RightSide
  }
};
</script>

<style scoped>
@import "~vue-single-date-picker/dist/vue-single-date-picker.css";

</style>
