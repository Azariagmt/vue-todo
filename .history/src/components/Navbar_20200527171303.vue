<template>
    <nav>
        <v-toolbar flat>
            <v-toolbar-title class="text-uppercase bold--text">
                <span class="font-weight-light">To</span>
                <span>do</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn @click="this.$vuetify.theme.dark = !this.$vuetify.theme.dark">night night</v-btn>
            <v-btn depressed flat color="grey">
                <v-icon left>account_circle</v-icon>
                <span>login</span>
            </v-btn>
        </v-toolbar>
        </nav>    
</template>
<script>
// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    dark: true,
  },
})
When you designate a component a
</script>