<template>
  <div class="home">
    <v-container fluid>
      <v-layout row wrap>
        
          <v-flex>
            <SingleDatePicker />
          </v-flex>
        </v-layout>
        <v-layout column xs12 md8 lg8>
          <v-flex>
            <v-card flat>
              <todo-list></todo-list>
            </v-card>
          </v-flex>
        </v-layout>
        <v-layout column class="d-none d-sm-none d-md-flex" md2 lg3>
          <v-flex>
            <right-side />
          </v-flex>
        </v-layout>
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
@import '~vue-single-date-picker/dist/vue-single-date-picker.css';
</style>
