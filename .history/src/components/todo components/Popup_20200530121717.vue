<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <v-btn class="success" dark v-on="on">Add New todo</v-btn>
      </template>
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>Add a New todo</v-card-title>

        <v-card-text>
          <v-form class="px-3">
            <v-text-field label="Title" prepend-icon="folder"></v-text-field>
        
        <v-menu>
            <v-text-field slot="activator" label="Due date" prepend-icon="date_range">
        
   <v-date-picker
      v-model="dueDate"
      width="290"
      class="mt-4"
    ></v-date-picker>
    <v-date-picker
      v-model="date"
      full-width
      :landscape="$vuetify.breakpoint.smAndUp"
      class="mt-4"
    ></v-date-picker>
            </v-text-field>
        </v-menu>
         <v-btn flat class="success">Add todo

         </v-btn>
          </v-form>
        </v-card-text>

      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {};
</script>