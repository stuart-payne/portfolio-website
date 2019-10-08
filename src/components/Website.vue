<template>
  <div class="projView">
    <h2 class="mb-4 accent--text">Portfolio Website</h2>
    <p>
      I needed a website to serve as a quick and concise access point for the projects which I have undertaken; 
      allowing for people interested in my work to find it easily. The requirements for it were for it to be simple,
      for the projects to be easily found and to serve as an advertisement for my own skills.
    </p>
    <p>
      I chose to use <b>Vue</b> as the framework, mainly due to familiarity with it. Having done several other projects wuth Vue
      already, there would be little for me to learn when unergoing the construction of this website. Why use a framework at all?
      Because I want to make it as easy as possible to add further projects that I do in the future. With the templating that 
      comes with Vue as well as the routing, the ability to add to the website is simlpe and will allow for minimal maintenance after 
      it is deployed.
    </p>
    <p>
      For the styling, <b>Vuetify</b> was chosen. The reasoning was to limit the amount of time styling so out-of-the-box functionality 
      that Vuetify offers was a good fit. Even when not using the Vuetify components, the helper classes that are provided are 
      useful, an example as the margin and padding classes, giving a helpful shorthand for common uses.
    </p>
    <p>
      Design-wise, with the requirement of quick access to my portfolio, I wanted all my information to be displayed on a single screen.
      Scrolling for information is to be avoided. I chose the idea of displaying the information in the form of an elaborate business
      card. 
    </p>
    <p>
      The site is an SPA. The main page is simply the card and the router view. Each page, including the home page is a component that is 
      accessed through vue-router. 
    </p>
    <div class="imgDisplay">
      <img :src="require('../assets/codeSnippets/routing.png')"/>
      <p class="imgCap">The code used for the configuration of the Vue router</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>