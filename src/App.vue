<template>
  <v-app class="bg">
    <Sidebar/>
    <v-main class="grey darken-3 bg">      
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

<style scoped>
  .bg{
    height: 0;
  }

</style>