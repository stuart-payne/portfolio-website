<template>
  <v-app>
    <div class="background">
      <div class="display elevation-10">
        <home class="ma-5"></home>
        <router-view class="router"></router-view>
        <v-breadcrumbs class="breadcrumb" dark :items="items"></v-breadcrumbs>
      </div>
    </div>

  </v-app>
</template>

<script>

import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  },
  data: () => ({
  }),
  computed: {
    items:  function() {
      return this.$breadcrumbs;
    }
  }
};
</script>

<style scoped>
  .background {
    display: flex;
    height: 100%;
    width: 100%;
    background-color: rgb(174, 124, 212);
    justify-content: space-around;
  }
  .display {
    background-color: rgb(39, 37, 41);
    width: 1152px;
    margin: auto;
    color: white;
    word-wrap:break-word;
  }
  .content {
    height: 92%;
  }

  .breadcrumb {
    color: rgb(174, 124, 212);
  }
  .smallT {
    font-size: 8px;
  }

  
  .router {
      max-width: 700px;
      margin: auto;
  }
</style>
