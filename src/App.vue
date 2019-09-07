<template>
  <v-app>
    <div class="background">
      <div class="display elevation-10">
        <div class="content">
        </div>
        <v-breadcrumbs dark :items="items"></v-breadcrumbs>
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
    items: [
      {
        text: 'Dashboard',
        disabled: false,
        href: 'breadcrumbs_dashboard',
      },
      {
        text: 'Link 1',
        disabled: false,
        href: 'breadcrumbs_link_1',
      },
      {
        text: 'Link 2',
        disabled: true,
        href: 'breadcrumbs_link_2',
      },
    ]
  }),
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
  }
  .content {
    height: 92%;
  }
</style>
