<template>
    <nav>
        <v-toolbar flat>
            <v-toolbar-title class="text-uppercase bold--text mx-2">
                <span class="font-weight-light">To</span>
                <span>do</span>
            </v-toolbar-title>
            <v-btn class="ml-2">
                <v-icon left>dashboard</v-icon>
                <span>Dashboard</span>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn @click="this.$vuetify.theme.dark = !this.$vuetify.theme.dark">
                
            </v-btn>
            <v-btn>
                <v-icon></v-icon>
                <span>Activities</span>
            </v-btn>
            <v-btn depressed flat color="grey">
                <v-icon left>account_circle</v-icon>
                <span>login</span>
            </v-btn>
        </v-toolbar>
        </nav>    
</template>
<script>
export default {
 data: function(){
     return{
         links: [
             {
                 icon: 'dashboard', text: 'Dashboard', route: '/'
             },
             {
                 icon: 'folder', text: 'Activities', route: '/activities'
             },
             
         ]
     }
 }   
}
</script>