<template>
  <v-app>
    <Sidebar/>
    <v-main class="grey darken-3">      
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Sidebar from './components/Sidebar.vue'

export default {
  name: 'App',

  components: {
    Sidebar
  },

  data: () => ({
    //
  }),
};
</script>
