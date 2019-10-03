<template>
  <div class="columnContainer">
      <div class="column">
          <div class="column-item flex">
                  <v-avatar class="mr-1" size="128">
                      <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
                  </v-avatar>
                  <div class="ml-1">
                    <h1 class="accent--text">Stuart Payne</h1>
                    <p class="ml-1">Software Developer</p>
                    <p class="body-2 ml-1">Portfolio website for an ambitious developer looking for his break in the software industry</p>
                  </div>
          </div>
          <v-row class="column-item smallT">
              <p>Hi! I'm a 27 year old self-taught software developer from the UK. I have been programming for over 2 years. 
                  The work I've done has mostly revolved Javascript in both Front-End development with Vue.js and backend with Node.
                  I have also dabbled in game development through Unity and C# with some Lua thrown in.</p>
          </v-row>
          <v-row class="column-item">
              <v-col cols="2">
                <h2 class="accent--text">Skills</h2>
              </v-col>
              <v-col cols="8">
                  <SkillBar title="JavaScript" percent="100"/>
                  <SkillBar title="Vue" percent="80"/>
                  <SkillBar title="Node" percent="80"/>
                  <SkillBar title="C#" percent="60"/>
                  <SkillBar title="HTML" percent="60"/>
                  <SkillBar title="CSS" percent="50"/>
                  <SkillBar title="Lua" percent="40"/>
              </v-col>
          </v-row>
      </div>
      <div class="column">
          <h2 class="mt-3 accent--text">Projects</h2>
          <project-card v-for="(item, index) in projectListFilter" 
            :key="index" 
            :img="item.img"
            :title="item.title"
            :description="item.description"
            :to="item.to"
            ></project-card>
      </div>
  </div>
</template>

<script>
import SkillBar from './SkillBar.vue'
import ProjectCard from './ProjectCard.vue'


export default {
    
    components: {
        SkillBar,
        ProjectCard
    },
    data() {
        return {
            startIndex: 0,
            endIndex: 3,
        }
    },
    computed: {
        projectListFilter: function() {
            return this.$projectList.filter((proj, ind) => 
                ind >= this.startIndex || ind <= this.endIndex
            )
        },
        projectList: function() {
            return this.$projectList;
        }
    }
}
</script>

<style>
    .overlayContainer {
        position: relative;
        width: 100%;
        height: 100%;
        margin: auto;
        background-color: #111111;
    }

    .column {
        height: 100%;
        max-width: 530px;
        margin: 0px 10px;
    }

    .columnContainer {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-between;
    }

    .column-item {
        margin-left: 10px;
        margin-right: 10px;
    }

    .flex {
        display: flex;
        align-items: flex-start;
        flex-wrap: nowrap;
        flex-direction: row;
    }

</style>