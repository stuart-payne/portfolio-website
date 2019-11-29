<template>
  <div class="columnContainer">
      <div class="column mr-4">
          <div class="column-item flex border">
                  <!-- <v-avatar class="mr-2" size="128">
                      <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
                  </v-avatar> -->
                  <div class="ml-1">
                    <h1 class="accent--text">Stuart Payne</h1>
                    <p >Software Developer</p>
                    <!-- <p class="body-2 ml-1">Portfolio website for an ambitious developer looking for his break in the software industry</p> -->
                  </div>
          </div>
          <h2 class="accent--text ml-3 my-1">Bio</h2>
          <v-row class="column-item smallT border">
              <p class="pa-1">I'm a 28 year old Environmental Science graduate who is a self-taught software developer from the UK. I have been programming for over 2 years. 
                  The work I've done has mostly revolved Javascript in both Front-End development with Vue.js and backend with Node.
                  I have also dabbled in game development through Unity and C# with some Lua thrown in.</p>
          </v-row>
          <v-row class="column-item mt-1">
              <div class="flex">
                <div class="mr-2">
                    <h2 class="accent--text">Skills</h2>
                </div>
                <div class="skillContainer pa-2">
                    <skill-bar title="JavaScript" percent="100"/>
                    <skill-bar title="Vue" percent="80"/>
                    <skill-bar title="Node" percent="80"/>
                    <skill-bar title="C#" percent="60"/>
                    <skill-bar title="HTML" percent="60"/>
                    <skill-bar title="CSS" percent="50"/>
                    <skill-bar title="Lua" percent="40"/>
                </div>
              </div>
          </v-row>
      </div>
      <div class="column ml-4">
          <div class="projFlex">
            <h2 class="mt-3 accent--text">Projects</h2>
            <a href="https://github.com/stuart-payne"><v-icon class="mt-3" large color="white">mdi-github-circle</v-icon></a>
          </div>
          <div class="btn-center">
            <v-btn text icon color="white" @click="decrementInd()" :disabled="upButton">
                <v-icon>mdi-menu-up</v-icon>
            </v-btn>
          </div>
          <project-card v-for="(item, index) in projectListFilter" 
            :key="index" 
            :img="item.img"
            :title="item.title"
            :description="item.description"
            :to="item.to"
            ></project-card>
            <div class="btn-center">
                <v-btn text icon color="white" @click="incrementInd()" :disabled="downButton">
                    <v-icon>mdi-menu-down</v-icon>
                </v-btn>
            </div>
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
            amountDisplayed: 4,
        }
    },
    methods: {
        incrementInd() {
            this.startIndex++;
            this.endIndex++;
        },
        decrementInd() {
            this.startIndex--;
            this.endIndex--;
        }
    },
    computed: {
        projectListFilter: { 
            get: function() {
            return this.$projectList.filter((proj, ind) => 
                ind >= this.startIndex && ind <= this.endIndex
            )},
            cache: false
        },
        projectList: function() {
            return this.$projectList;
        },
        downButton: {
            cache: false,
            get: function() {
                return this.endIndex + 1 >= this.$projectList.length; 
            }
        },
        upButton: {
            cache: false,
            get: function() {
                return this.startIndex == 0;
            }
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
        margin: 0px 0px;
    }

    .columnContainer {
        margin: 20px 20px;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
    }

    .column-item {
        margin-left: 10px;
        margin-right: 10px;
    }

    .skillContainer {
        width: 70%;
    }

    .flex {
        display: flex;
        align-items: flex-start;
        flex-wrap: wrap;
        flex-direction: row;
    }

    .btn-center {
        display: flex;
        justify-content: center;
    }

    .border {
        border-bottom: 2px solid #64b5f6;
    }

    .projFlex {
        display: flex;
        justify-content: space-between;
    }

</style>