<template>
    <div>
    <v-app-bar
        color="blue darken-2"
        dense
        dark
    >
        
        <v-toolbar-title>Page title</v-toolbar-title>
        <v-spacer></v-spacer>

        <v-btn icon>
            <v-icon>mdi-shopping</v-icon>
        </v-btn>

        <v-btn icon>
            <v-icon>mdi-user</v-icon>
        </v-btn>

      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        </v-menu>
    </v-app-bar>
    </div>
</template>

<script>
    export default {
        name: "app_bar"
    }
</script>