<template>
  <v-app>
    <div class="background">
      <div class="display elevation-10">
        <router-view class="content pa-5">
        </router-view>
        <v-breadcrumbs class="breadcrumb" dark :items="items"></v-breadcrumbs>
      </div>
    </div>

  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
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
    height: 675px;
    width: 1200px;
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
</style>
