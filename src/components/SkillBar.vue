<template>
  <div id="skillBar">
      <h4 id="header">{{title}}</h4>
      <v-progress-linear :value="percent" color="blue lighten-2" rounded></v-progress-linear>
  </div>
</template>

<script>
export default {
    props: {
        title: String,
        percent: String
    }
}
</script>

<style>
    #header {
        margin-right: 5px;
    }
    #skillBar {
        justify-content: space-around;
        padding: 2px;
    }
</style>