<template>
  <div class="home">
    <v-container fluid>
      {{data}}
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
  data: function() {
    return {
      quotes
    };
  },
  components: {
    TodoList,
    SingleDatePicker,
    RightSide
  },
  methods: {
    fetchData() {
      this.error = this.post = null;
      this.loading = true;
      fetch("https://type.fit/api/quotes")
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          console.log(data);
          this.quotes = data;
        });
    }
  }
};
</script>

<style scoped>
@import "~vue-single-date-picker/dist/vue-single-date-picker.css";
.calendar {
  text-align: center;
  margin-top: 250px;
  padding-left: 30px;
  justify-content: center;
}
</style>
