<template>
  <div class="columnContainer">
      <div class="column">
          <v-row class="column-item">
              <v-col cols="3">
                  <v-avatar size="128">
                      <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
                  </v-avatar>
              </v-col>
              <v-col cols="9">
                  <h1>Stuart Payne</h1>
                  <p>Software Developer</p>
                  <p>Portfolio website for an ambitious developer looking for his break in the software industry</p>
              </v-col>
          </v-row>
          <v-row class="column-item">
              <p>Hi! I'm a 27 year old self-taught software developer from the UK. I have been programming for over 2 years. 
                  The work I've done has mostly revolved Javascript in both Front-End development with Vue.js and backend with Node.
                  I have also dabbled in game development through Unity and C# with some Lua thrown in.</p>
          </v-row>
          <v-row class="column-item">
              <v-col cols="2">
                <h3>Skills</h3>
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
      </div>
  </div>
</template>

<script>
import SkillBar from './SkillBar.vue'

export default {
    
    components: {
        SkillBar
    }
}
</script>

<style>
    .column {
        height: 100%;
        width: 50%;
    }

    .columnContainer {
        display: flex;
    }

    .column-item {
        margin-left: 10px;
        margin-right: 10px;
    }
</style>