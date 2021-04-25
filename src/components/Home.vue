<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <!--  -->
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <!--  -->
    </v-main>

    <v-snackbar v-model="snackbar" :timeout="timeout">
      Hello World
      <template v-slot:action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    snackbar: null,
    timeout: 1500,
  }),
  mounted() {
      if (localStorage.getItem('isOnline')) {
          this.snackbar = true;
      }
      else {
          this.$router.push('/')
      }
  }
};
</script>