<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <v-btn class="success" dark v-on="on">Add New todo</v-btn>
      </template>
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>Add a New todo</v-card-title>
      </v-card>
      <v-card-text>
<v-form class="px-3">
<v-text-field label="Title">

</v-text-field>
</v-form>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
    
}
</script>