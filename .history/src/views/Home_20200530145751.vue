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
            <v-card text>
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
import TodoList from "@/components/todo components/TodoList.vue";
import SingleDatePicker from "vue-single-date-picker";
import RightSide from "@/components/RightSide.vue";

export default {
  name: "Home",
  data: function() {
    return {
  
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
.single-date-picker__calendar-month-header[data-v-1179a6d7]{padding:2px;background-image:-webkit-gradient(linear,left top,right top,from(#050553),color-stop(#d4b8ca),to(#c7a3b5));background-image:linear-gradient(90deg,#e0caca,#d4b8ca,#c7a3b5);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;border-radius:10px 10px 0 0;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#77505e}.single-date-picker__calendar-month-header .single-date-picker__year[data-v-1179a6d7]{font-weight:900;font-size:15px;text-transform:capitalize}.single-date-picker__calendar-month-header .single-date-picker__arrow[data-v-1179a6d7]{cursor:pointer}.single-date-picker__calendar-week-header[data-v-187bfc22]{margin-top:0px;color:#77505e}.single-date-picker__date[data-v-7e5b706c]{font-size:10px;font-size:14px;height:20px;width:30px;display:table-cell;vertical-align:middle;-webkit-box-sizing:border-box;box-sizing:border-box;cursor:default}.single-date-picker__date.single-date-picker__selected[data-v-7e5b706c],.single-date-picker__date[data-v-7e5b706c]:hover{border-radius:50%;border:2px solid pink}.single-date-picker__date.single-date-picker__today[data-v-7e5b706c]{border-radius:50%;background-image:-webkit-gradient(linear,left top,right bottom,from(#f1b4b9),to(#d2b0c3));background-image:linear-gradient(to bottom right,#f1b4b9,#d2b0c3)}tr[data-v-12521860]{color:#614a52}.single-date-picker__calendar-month[data-v-755a6891]{width:100%;padding:5px}#single-date-picker[data-v-9c6cc3d6]{font-family:Lato,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-align:center;color:#2c3e50}.single-date-picker__calendar-view[data-v-9c6cc3d6]{max-width:200px;background-color:#fff;border-radius:10px;-webkit-box-shadow:0 0 10px 3px rgba(0,0,0,.1);box-shadow:0 0 10px 3px rgba(0,0,0,.1);color:#0d1e44}
.calendar {
  text-align: center;
  margin-top: 250px;
  padding-left: 30px;
  justify-content: center;
}
</style>
