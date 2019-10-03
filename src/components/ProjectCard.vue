<template>
  <div class="project pa-2"
    @click="onClick">
      <v-avatar class="mr-2"
        tile
        min-width="160"
        width="160"
        min-height="90"
        height="90" ><v-img :src="require(`../assets/${img}.png`)"></v-img>
      </v-avatar>
      <div class="pa-1">
          <h4> {{title}}</h4>
          <p class="caption"> {{description}}</p>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        title: String,
        img: String,
        description: String,
        to: String
    },
    data() {
        return {
            isHovered: false
        }
    },
    methods: {
        onClick() {
            this.$router.push(this.to);
        }
    }
}
</script>
<style>
    .project {
        display: flex;
        width: 100%;
        margin-top: 5px;
        border: 2px solid #64b5f6;
        border-radius: 6px;
    }

    .project:hover {
        background-color: #64b5f6 ;
    }
</style>