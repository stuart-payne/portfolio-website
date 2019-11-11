<template>
  <v-app>
    <div class="background">
      <div class="display elevation-10">    
      <!-- <v-breadcrumbs v-if="notHome" class="breadcrumb" dark :items="items"></v-breadcrumbs> -->
      <div class="breadcrumb"
      v-if="notHome">
        <v-btn class="mt-3 ml-3 accent--text" color="rgb(39, 37, 41)" outlined to="/"><v-icon large>mdi-arrow-left-bold</v-icon>Back</v-btn>
        <a href="https://github.com/stuart-payne"><v-icon class="mt-3 mr-3" large color="white">mdi-github-circle</v-icon></a>
      </div>
        <!-- <home class="ma-5"></home> -->
        <router-view></router-view>
      </div>
    </div>

  </v-app>
</template>

<script>

export default {
  name: 'App',
  computed: {
    items:  function() {
      return this.$breadcrumbs;
    },
    notHome: {
      cache: false,
      get: function() {
        return this.$router.currentRoute.fullPath !== "/";
      }
    }
  }
};
</script>

<style scoped>

  .background {
    display: flex;
    height: 100%;
    width: 100%;
    background-color: rgb(21, 22, 26);
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

  .btn {
    color: rgb(39, 37, 41);
  }

  .breadcrumb {
    color: rgb(174, 124, 212);
    position: sticky;
    display: flex;
    justify-content: space-between;
    top:0;
    background-color: rgb(39, 37, 41);
    border-bottom: 2px white solid;
    width: 100%;
    height: 60px;
  }
  .smallT {
    font-size: 8px;
  }
  
  .router {
      max-width: 700px;
      margin: auto;
  }
</style>
