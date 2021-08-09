<template>
  <v-app>
    <p-toolbar />
    <v-content style="background-color: white">
      <router-view />
    </v-content>
    <p-footer />
  </v-app>
  
</template>

<script>

import PToolbar from "./components/Toolbar";
import PFooter from "./components/Footer";
export default {
  name: "App",
  components: {
    PToolbar,
    PFooter
  },
  data: () => ({
    //
  })
};
</script>

