<template>
  <div class="home" style="position:fixed;">
    <v-container fluid>
      <v-layout row wrap>
        <v-layout column class="d-none d-sm-none d-md-flex" md3 lg3>
          <v-flex>
            <SingleDatePicker />
          </v-flex>
        </v-layout>
        <v-layout column xs12 md6 lg6 style="position:relative; overflow-y:auto;">
          <v-flex>
            <div >
                <todo-list></todo-list>
            </div>
          
          </v-flex>
        </v-layout>
        <v-layout column class="d-none d-sm-none d-md-flex" md3 lg3>
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
